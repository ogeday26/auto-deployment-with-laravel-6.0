const bcrypt = require('bcrypt-nodejs');
const moment = require('moment');
const User = require('@models/User');

const Login = async (req, res, next) => {
  const user = await User.query().findById(1);
  res.status(200).json(user.fullName());
};

module.exports = {
  Login
};
