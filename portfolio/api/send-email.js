import nodemailer from 'nodemailer';
import { Client } from '@notionhq/client';

// 🚀 Vercel Function: Modern ESM Fix
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 🛡️ Safety check: If keys aren't set in Vercel Settings
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({ 
      success: false, 
      error: "MISSING_KEYS: Please go to Vercel DASHBOARD -> Settings -> Environment Variables and add EMAIL_USER and EMAIL_PASS." 
    });
  }

  const { name, email, budget, timeline, message, service } = req.body;
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    // 1. Send Email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Message from ${name}`,
      text: `💼 Service: ${service}\n👤 Name: ${name}\n📧 Email: ${email}\n💰 Budget: ${budget}\n⏳ Timeline: ${timeline}\n📝 Details: ${message}`
    };
    await transporter.sendMail(mailOptions);

    // 2. Add to Notion (if settings are ready)
    if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID && process.env.NOTION_API_KEY !== 'YOUR_NOTION_API_KEY_HERE') {
      try {
        await notion.pages.create({
          parent: { database_id: process.env.NOTION_DATABASE_ID },
          properties: {
            Name: { title: [{ text: { content: name || 'Unknown' } }] },
            Email: { email: email || 'no-email@example.com' },
            Service: { select: { name: service || 'Other' } },
            Budget: { rich_text: [{ text: { content: budget || 'N/A' } }] },
            Timeline: { rich_text: [{ text: { content: timeline || 'N/A' } }] },
            Message: { rich_text: [{ text: { content: message || '' } }] },
          },
        });
        console.log('Lead saved to Notion');
      } catch (notionErr) {
        console.error("Notion Error (Skipping):", notionErr.message);
      }
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server Error:", error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
}
