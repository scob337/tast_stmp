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
    from: `${name} <${email}>`, // 👈 خلي from ديناميك حسب المستخدم
    to: process.env.EMAIL_USER, // 👈 الإيميل الثابت بتاع الشركة
    replyTo: email,
    subject: 'Message from Divani Website',
    html:`
    <!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Message from Divani Website</title>
</head>
<body style="margin: 20px; padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0A162C;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #0A162C; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); border: 1px solid #1a2942; padding: 15px;">
    
    <!-- Header -->
    <div style="background-color: #0c1b33; padding: 30px 25px; text-align: center; border-bottom: 1px solid #1a2942;">
      <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Message from Divani Website</h1>
      <p style="color: #b3c5e2; margin: 10px 0 0; font-size: 16px;">A new message has been received via the contact form</p>
    </div>
    
    <!-- Content -->
    <div style="padding: 30px 25px;">
      
      <!-- Sender Info -->
      <div style="background-color: #0d1c34; border-radius: 8px; padding: 20px; margin-bottom: 25px; border-left: 4px solid #3182ce;">
        <h2 style="margin: 0 0 20px; color: #ffffff; font-size: 18px; border-bottom: 1px solid #1a2942; padding-bottom: 10px;">Sender Information</h2>
        
        <div style="display: block; margin-bottom: 15px;">
          <p style="margin: 0; font-size: 15px; color: #b3c5e2;">
            <strong style="color: #ffffff; display: inline-block; width: 120px;">Name:</strong> <span style="color: #ffffff;">${name}</span>
          </p>
        </div>
        
        <div style="display: block; margin-bottom: 15px;">
          <p style="margin: 0; font-size: 15px; color: #b3c5e2;">
            <strong style="color: #ffffff; display: inline-block; width: 120px;">Email:</strong> <span style="color: #ffffff;">${email}</span>
          </p>
        </div>
        
        <div style="display: block;">
          <p style="margin: 0; font-size: 15px; color: #b3c5e2;">
            <strong style="color: #ffffff; display: inline-block; width: 120px;">Phone:</strong> <span style="color: #ffffff;">${phone || 'Not provided'}</span>
          </p>
        </div>
      </div>
      
      <!-- Message -->
      <div style="background-color: #0d1c34; border: 1px solid #1a2942; border-radius: 8px; padding: 20px;">
        <h2 style="margin: 0 0 15px; color: #ffffff; font-size: 18px; border-bottom: 1px solid #1a2942; padding-bottom: 10px;">Message Content</h2>
        <div style="background-color: #0f1f38; padding: 20px; border-radius: 6px; border: 1px dashed #1a2942;">
          <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #ffffff; white-space: pre-line;">${message}</p>
        </div>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="background-color: #0c1b33; padding: 20px; text-align: center; border-top: 1px solid #1a2942;">
      <p style="margin: 0; color: #b3c5e2; font-size: 14px;">© ${new Date().getFullYear()} Divani Website. All rights reserved.</p>
      <p style="margin: 10px 0 0; color: #8096b9; font-size: 12px;">This message was automatically sent from the contact form on Divani Website.</p>
    </div>
  </div>
</body>
</html>
`,
  };



  // إرسال الإيميلين
  await transporter.sendMail(companyMailOptions);
 
  // 2️⃣ إرسال الإيميل فقط للشركة
  await transporter.sendMail(companyMailOptions);
};

export default sendEmail;
