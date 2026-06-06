import { NextResponse } from 'next/server';

export const revalidate = 21600; // 6h cache

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
    cache: 'no-store',
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  if (!json.data) throw new Error(json.message || 'GitHub API returned no data');
  return json.data;
}

export async function GET() {
  try {
    const data = await fetchGitHub(
      `query CommitLanguages($login: String!) {
        user(login: $login) {
          contributionsCollection {
            commitContributionsByRepository(maxRepositories: 100) {
              repository {
                primaryLanguage {
                  name
                  color
                }
              }
              contributions {
                totalCount
              }
            }
          }
        }
      }`,
      { login: USERNAME }
    );

    const langMap = new Map();
    for (const node of data.user.contributionsCollection.commitContributionsByRepository) {
      if (!node.repository.primaryLanguage) continue;
      const { name, color } = node.repository.primaryLanguage;
      const count = node.contributions.totalCount;
      if (langMap.has(name)) {
        langMap.get(name).value += count;
      } else {
        langMap.set(name, { name, color: color || '#586e75', value: count });
      }
    }

    const langData = Array.from(langMap.values())
      .sort((a, b) => b.value - a.value)
      .slice(0, 5);

    // Fallback if empty
    if (langData.length === 0) {
      return NextResponse.json([{ name: 'No data', color: '#586e75', value: 1 }]);
    }

    return NextResponse.json(langData);
  } catch (err) {
    console.error('GitHub commits-per-language API error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
