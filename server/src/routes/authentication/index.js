const app = (module.exports = require('express')());

// const { log } = require('@middlewares/log');

const { Login } = require('@controllers/authenticationController/Login');

const LoginSchema = require('@schemas/authentication/Login');

app.post('/login', LoginSchema, Login);
