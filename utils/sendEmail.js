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

  // 1️⃣ الإيميل اللي هيروح ليك (أنت)
  const companyMailOptions = {
    from: email, // من الإيميل اللي كتبه المستخدم
    to: process.env.EMAIL_USER, // الإيميل بتاعك (بتحطه في .env)
    subject: 'رسالة من موقع ديفاني',
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7f9; padding: 20px; border-radius: 10px; border: 1px solid #ddd;">
        <h2 style="color: #333; text-align: center;">رسالة من موقع ديفاني</h2>
        <div style="background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <p style="font-size: 1.1em; color: #555;"><strong>الاسم:</strong> ${name}</p>
          <p style="font-size: 1.1em; color: #555;"><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p style="font-size: 1.1em; color: #555;"><strong>الهاتف:</strong> ${phone}</p>
          <p style="font-size: 1.1em; color: #555;"><strong>الرسالة:</strong><br>${message}</p>
        </div>
        
        <hr style="margin: 20px 0; border-top: 1px solid #ddd;">
        
        <h3 style="color: #333; text-align: center;">تفاصيل الرسالة</h3>
        <div style="background-color: #fff; padding: 15px; border-radius: 8px; border: 1px solid #ddd;">
          <p><strong>من:</strong> ${email}</p>
          <p><strong>إلى:</strong> ${process.env.EMAIL_USER}</p>
        </div>
        
        <p style="font-size: 0.9em; color: #777; margin-top: 20px; text-align: center;">تم إرسال هذه الرسالة من موقع ديفاني. إذا كان لديك أي استفسار، لا تتردد في الرد.</p>
      </div>
    `,
  };

  // إرسال الإيميل فقط للشركة
  await transporter.sendMail(companyMailOptions);  // الإيميل للشركة
};

export default sendEmail;
