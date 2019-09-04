const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    password: Joi.string().regex(/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{3,30}$/)
  });

  const { error } = Joi.validate(req.body, schema);

  if (error) {
    switch (error.details[0].context.key) {
      case 'email':
        return res.status(400).send('Girdiğiniz E-Posta doğru bir E-Posta adresi değil.');
        break;
      case 'password':
        return res.status(400).send('Parola alanında desteklenmeyen karakter mevcut.');
        break;
      default:
        console.log('V9999');
        break;
    }
  } else {
    next();
  }
};
