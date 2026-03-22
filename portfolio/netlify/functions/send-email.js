const express = require('express');
const serverless = require('serverless-http');
const nodemailer = require('nodemailer');
const { Client } = require('@notionhq/client');
require('dotenv').config();

const app = express();
app.use(express.json());

// Setup Notion Client
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Setup Nodemailer (using your Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS
  }
});

app.post('/.netlify/functions/send-email', async (req, res) => {
  const { name, email, budget, timeline, message, service } = req.body;

  try {
    // 1. Send Email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, 
      subject: `New Portfolio Message from ${name}`,
      text: `💼 Service: ${service}\n👤 Name: ${name}\n📧 Email: ${email}\n💰 Budget: ${budget}\n⏳ Timeline: ${timeline}\n📝 Details: ${message}`
    };
    await transporter.sendMail(mailOptions);

    // 2. Add to Notion (if keys are set)
    if (process.env.NOTION_API_KEY && process.env.NOTION_DATABASE_ID && process.env.NOTION_API_KEY !== 'YOUR_NOTION_API_KEY_HERE') {
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
      console.log('✅ Lead saved to Notion');
    }

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports.handler = serverless(app);
