import express from 'express';
import process from 'process';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' }); // To load environment variables from a .env file

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { userName, userEmail, userMessage } = req.body;

  try {
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password or app-specific password
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'admin@example.com', // Replace with the email where messages should be sent
      subject: `New Message from ${userName}`,
      text: `You received a new message from ${userName} (${userEmail}):\n\n${userMessage}`,
    };

    // Email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Thank you for reaching out!',
      text: `Hi ${userName},\n\nThank you for contacting MB Ultra Clean! One of our representatives will call you soon.\n\nBest regards,\nMB Ultra Clean Team`,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send emails', error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
