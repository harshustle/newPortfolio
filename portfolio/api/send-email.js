import { Client } from '@notionhq/client';

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, budget, timeline, message, service } = req.body || {};

  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name:     { title:     [{ text: { content: name     || 'Unknown' } }] },
        Email:    { email:      email    || 'no-email@example.com' },
        Service:  { select:    { name:   service  || 'Other' } },
        Budget:   { rich_text: [{ text: { content: budget   || 'N/A' } }] },
        Timeline: { rich_text: [{ text: { content: timeline || 'N/A' } }] },
        Message:  { rich_text: [{ text: { content: message  || ''    } }] },
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Notion Error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
}
