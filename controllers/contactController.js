import sendEmail from '../utils/sendEmail.js';

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    await sendEmail({ name, email, phone, message });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to send message.', error: err.message });
  }
};
