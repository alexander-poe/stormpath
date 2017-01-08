const path = require('path');
const express = require('express');
const stormpath = require('express-stormpath');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const config = require('./webpack.config');
const app = express();
const compiler = webpack(config);
const Yelp = require('yelpv3');
require('dotenv').config();
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DB_LINK
});
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(stormpath.init(app, {
  web: {
    produces: ['application/json']
  }
}));
var user; 
app.get('/profile', stormpath.getUser, function (req, res) {
   if (req.user) {
    user = req.user.email;
    console.log(user)
    res.end();
   } else {
     res.send('Not logged in');
   }

 });
app.get('/userdata', (req, res) => {
  knex('paystubs').select('*').then((data) => {
    console.log('server', data);
    return res.status(200).json({data})
  })
})
app.post('/me', stormpath.loginRequired, function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }
  function saveAccount () {
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;
    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }
  if (req.body.password) {
    var application = req.app.get('stormpathApplication');
    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }
      req.user.password = req.body.password;
      saveAccount();
    });
  } else {
    saveAccount();
  }
});
app.on('stormpath.ready', function () {
  app.listen(3000, 'localhost', function (err) {
    if (err) {
      return console.error(err);
    }
    console.log('Listening at http://localhost:3000');
  });
});
//============================== bootstrap 
app.get('/css/bootstrap.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/css/bootstrap.min.css'));
});
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});
