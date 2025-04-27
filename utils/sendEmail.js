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

  // 1️⃣ الإيميل اللي هيروح للشركة
  const companyMailOptions = {
    from: email, // From the user's email
    to: process.env.EMAIL_USER, // Company's email from .env
    subject: 'New Contact Message',
    html: `
      <div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #6e7f80, #3b4e58); border-radius: 15px; border: 1px solid #ddd; max-width: 650px; margin: auto; box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);">
        <h2 style="color: #fff; text-align: center; font-size: 26px; font-weight: bold; padding-bottom: 15px;">📩 Contact Form Submission</h2>
        
        <hr style="border: 1px solid #fff; margin-bottom: 25px;">
        
        <div style="background-color: #fff; padding: 25px; border-radius: 10px; border: 1px solid #ddd;">
          <p style="font-size: 1.2em; color: #333;">
            <strong>📧 From:</strong> <a href="mailto:${email}" style="color: #3b4e58;">${email}</a>
          </p>
          <p style="font-size: 1.2em; color: #333;">
            <strong>📩 To:</strong> <a href="mailto:${process.env.EMAIL_USER}" style="color: #3b4e58;">${process.env.EMAIL_USER}</a>
          </p>
          <hr style="border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 1.2em; color: #333;">
            <strong>👤 Name:</strong> ${name}
          </p>
          <p style="font-size: 1.2em; color: #333;">
            <strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #3b4e58;">${email}</a>
          </p>
          <p style="font-size: 1.2em; color: #333;">
            <strong>📱 Phone:</strong> ${phone}
          </p>
          <p style="font-size: 1.2em; color: #333;">
            <strong>📝 Message:</strong><br><i>${message}</i>
          </p>
        </div>
        
        <hr style="border-top: 1px solid #ddd; margin-top: 25px;">
        
        <h3 style="font-size: 22px; text-align: center; color: #fff; font-weight: normal; margin-top: 20px;">New Message Alert</h3>
      </div>
    `,
  };

  // 2️⃣ إرسال الإيميل فقط للشركة
  await transporter.sendMail(companyMailOptions);
};

export default sendEmail;
