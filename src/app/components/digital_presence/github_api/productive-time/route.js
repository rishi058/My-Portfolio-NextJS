import { NextResponse } from 'next/server';

export const revalidate = 21600; // 6h cache

const GITHUB_GRAPHQL = 'https://api.github.com/graphql';
const USERNAME = 'rishi058';
const UTC_OFFSET = 5.5; // IST

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
    cache: 'no-store',
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  if (!json.data) throw new Error(json.message || 'GitHub API returned no data');
  return json.data;
}

export async function GET() {
  try {
    // Step 1: Get user node ID
    const idData = await fetchGitHub(
      `query getUserId($login: String!) {
        user(login: $login) { id }
      }`,
      { login: USERNAME }
    );
    const userId = idData.user.id;

    // Step 2: Get commit timestamps for productive time calculation
    const until = new Date().toISOString();
    const since = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).toISOString();

    const data = await fetchGitHub(
      `query ProductiveTime($login: String!, $userId: ID!, $until: GitTimestamp!, $since: GitTimestamp!) {
        user(login: $login) {
          contributionsCollection {
            commitContributionsByRepository(maxRepositories: 50) {
              repository {
                defaultBranchRef {
                  target {
                    ... on Commit {
                      history(first: 50, since: $since, until: $until, author: { id: $userId }) {
                        edges {
                          node {
                            committedDate
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
      { login: USERNAME, userId, until, since }
    );

    // Build 24-element array counting commits per hour (adjusted for UTC offset)
    const chartData = new Array(24).fill(0);
    const contributions = data.user.contributionsCollection.commitContributionsByRepository;

    for (const repoNode of contributions) {
      const defaultBranchRef = repoNode.repository.defaultBranchRef;
      if (!defaultBranchRef) continue;
      const edges = defaultBranchRef.target?.history?.edges ?? [];
      for (const edge of edges) {
        const utcHour = new Date(edge.node.committedDate).getUTCHours();
        let localHour = Math.round(utcHour + UTC_OFFSET);
        if (localHour < 0) localHour += 24;
        if (localHour >= 24) localHour -= 24;
        chartData[localHour] += 1;
      }
    }

    return NextResponse.json({ chartData, utcOffset: UTC_OFFSET });
  } catch (err) {
    console.error('GitHub productive-time API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
