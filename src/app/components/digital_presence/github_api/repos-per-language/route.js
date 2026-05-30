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
    next: { revalidate: 21600 },
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

export async function GET() {
  try {
    let hasNextPage = true;
    let cursor = null;
    const nodes = [];

    while (hasNextPage) {
      const data = await fetchGitHub(
        `query ReposPerLanguage($login: String!, $endCursor: String) {
          user(login: $login) {
            repositories(isFork: false, first: 100, after: $endCursor, ownerAffiliations: OWNER) {
              nodes {
                primaryLanguage {
                  name
                  color
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }
        }`,
        { login: USERNAME, endCursor: cursor }
      );

      const repos = data.user.repositories;
      hasNextPage = repos.pageInfo.hasNextPage;
      cursor = repos.pageInfo.endCursor;
      nodes.push(...repos.nodes);
    }

    // Count languages
    const langMap = new Map();
    for (const node of nodes) {
      if (node.primaryLanguage) {
        const { name, color } = node.primaryLanguage;
        if (langMap.has(name)) {
          langMap.get(name).value += 1;
        } else {
          langMap.set(name, { name, color: color || '#586e75', value: 1 });
        }
      }
    }

    const langData = Array.from(langMap.values())
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    return NextResponse.json(langData);
  } catch (err) {
    console.error('GitHub repos-per-language API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
