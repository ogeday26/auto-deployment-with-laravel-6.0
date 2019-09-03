const app = (module.exports = require('express')());

app.get('/', (req, res) => {
  res.status(200).json('Welcome to Auto-deploy Rest Service');
});

app.use('/authentication', require('./authentication'));
