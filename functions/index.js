const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, message, services } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'novaframes02@gmail.com',
      pass: 'ihctqwihcrhxlxzd'
    }
  });

  try {
    await transporter.sendMail({
      from: 'novaframes02@gmail.com',
      to: 'novaframes02@gmail.com',
      subject: `New message from ${name}`,
      html: `<p>${message}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Services: ${services}</p>`
    });

    await transporter.sendMail({
      from: 'novaframes02@gmail.com',
      to: email,
      subject: 'We received your message',
      html: `<p>Hi ${name},</p><p>Thank you for contacting us!</p>`
    });

    res.status(200).send('Emails sent!');
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send('Error sending email');
  }
});

// Export the app as a Cloud Function
exports.api = functions.https.onRequest(app);
