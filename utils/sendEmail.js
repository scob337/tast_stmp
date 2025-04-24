// utils/sendEmail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Message',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #333;">📩 Contact Form Submission</h2>
        <div style="background: #fff; padding: 15px; border: 1px solid #ccc; border-radius: 8px;">
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>📱 Phone:</strong> ${phone}</p>
          <p><strong>📝 Message:</strong><br>${message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 0.9em; color: #777;">Sent from your contact form backend.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);

};

export default sendEmail;
