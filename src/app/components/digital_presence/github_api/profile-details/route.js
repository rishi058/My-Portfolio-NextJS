import { NextResponse } from 'next/server';

const GITHUB_GRAPHQL = 'https://api.github.com/graphql';
const USERNAME = 'rishi058';

async function fetchGitHub(query, variables) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('GITHUB_TOKEN is not set');

  const res = await fetch(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 21600 }, // 6h cache
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
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
