import { NextResponse } from 'next/server';
import https from 'https';

export const revalidate = 21600; // 6h cache

const GITHUB_GRAPHQL_HOST = 'api.github.com';
const GITHUB_GRAPHQL_PATH = '/graphql';
const USERNAME = 'rishi058';

function fetchGitHub(query, variables) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is not set');

  const body = JSON.stringify({ query, variables });

  return new Promise((resolve, reject) => {
    const options = {
      hostname: GITHUB_GRAPHQL_HOST,
      path: GITHUB_GRAPHQL_PATH,
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        'User-Agent': 'portfolio-website/1.0',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.errors) return reject(new Error(json.errors[0].message));
          if (!json.data) return reject(new Error(json.message || JSON.stringify(json)));
          resolve(json.data);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// Fetch contributions for a specific year
async function getContributionByYear(year) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;
  const data = await fetchGitHub(
    `query ContributionsByYear($login: String!) {
      user(login: $login) {
        contributionsCollection(from: "${from}", to: "${to}") {
          totalCommitContributions
          contributionCalendar {
            totalContributions
          }
        }
      }
    }`,
    { login: USERNAME }
  );
  return {
    totalCommitContributions: data.user.contributionsCollection.totalCommitContributions,
    totalContributions: data.user.contributionsCollection.contributionCalendar.totalContributions,
  };
}

export async function GET() {
  try {
    const data = await fetchGitHub(
      `query UserDetails($login: String!) {
        user(login: $login) {
          id
          name
          email
          createdAt
          twitterUsername
          company
          location
          websiteUrl
          repositories(first: 100, privacy: PUBLIC, isFork: false, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}) {
            totalCount
            nodes {
              stargazers { totalCount }
            }
          }
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
            contributionYears
          }
          repositoriesContributedTo(first: 1, includeUserRepositories: true, privacy: PUBLIC, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
            totalCount
          }
          pullRequests(first: 1) { totalCount }
          issues(first: 1) { totalCount }
        }
      }`,
      { login: USERNAME }
    );

    const user = data.user;

    // Calculate total stars
    const totalStars = user.repositories.nodes.reduce(
      (acc, repo) => acc + repo.stargazers.totalCount,
      0
    );

    // Flatten contribution days (last year)
    const contributions = [];
    for (const week of user.contributionsCollection.contributionCalendar.weeks) {
      for (const day of week.contributionDays) {
        contributions.push({ date: day.date, count: day.contributionCount });
      }
    }

    // Calculate total contributions across all years
    const years = user.contributionsCollection.contributionYears;
    let totalContributions = 0;
    for (const year of years) {
      const y = await getContributionByYear(year);
      totalContributions += y.totalContributions;
    }

    // Calculate how long ago joined
    const createdAt = new Date(user.createdAt);
    const now = new Date();
    const diffMs = now - createdAt;
    const diffYears = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 30));
    const joinedAgo = diffYears >= 1
      ? `${diffYears} year${diffYears > 1 ? 's' : ''} ago`
      : diffMonths >= 1
        ? `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`
        : 'Recently';

    return NextResponse.json({
      username: USERNAME,
      name: user.name,
      createdAt: user.createdAt,
      joinedAgo,
      totalPublicRepos: user.repositories.totalCount,
      totalStars,
      totalContributions,
      totalPRs: user.pullRequests.totalCount,
      totalIssues: user.issues.totalCount,
      totalRepoContributions: user.repositoriesContributedTo.totalCount,
      contributions, // [{date, count}]
      contributionYears: years,
    });
  } catch (err) {
    console.error('GitHub profile-details API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
