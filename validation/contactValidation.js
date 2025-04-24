// validation/contactValidation.js
import Joi from 'joi';

const contactSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9\-\+\s]{7,15}$/).required(),
  message: Joi.string().min(10).required(),
});

export default contactSchema;
