require('module-alias/register');
const app = require('express')();
const server = require('http').Server(app);
global.io = require('socket.io')(server);
// const socketioJwt = require('socketio-jwt');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const { customSentryMessage } = require('@utils/common');

const routes = require('./src/routes/index');

// const Sentry = require('@sentry/node');

// Sentry.init({
//   dsn: ''
// });

// app.use(Sentry.Handlers.errorHandler());

app.use(morgan('combined'));
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

// app.use(Sentry.Handlers.errorHandler());

app.all('*', (req, res) => {
  const err = {};
  err.messeage = 'Unknown route!';
  // customSentryMessage(err, res, '1000');
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(err.status).send({ message: err.message });
    return;
  }
  next();
});

server.listen(80, () => {
  console.log('Auto-deploy Rest Service listening at port %s', server.address().port);
});

module.exports = { app };
