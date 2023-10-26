require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message, service, sender, pass, receiver } = req.body;

  // Configure nodemailer to send an email
  const transporter = nodemailer.createTransport({
    service: service,
    auth: {
      user: sender,
      pass: pass,
    },
  });

  const mailOptions = {
    from: sender,
    to: receiver,
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send(`<script>alert('Error sending email'); window.location = 'https://dimtony.github.io/formailer/';</script>`);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(`<script>alert('Email sent successfully'); window.location = 'https://dimtony.github.io/formailer/';</script>`);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

