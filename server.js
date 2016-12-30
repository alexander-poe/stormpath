const path = require('path');
const express = require('express');
const stormpath = require('express-stormpath');
const bodyParser = require('body-parser');
const webpack = require('webpack');
const config = require('./webpack.config');
const app = express();
const compiler = webpack(config);
const Yelp = require('yelpv3');

var knex = require('knex')({
  client: 'pg',
  connection: {
    database: 'YelpData'
  },
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

 //================================= Yelp Call

var yelp = new Yelp({
  app_id: 'USwwY8oe_EPJHgmgNAFJrA',
  app_secret: '28AP3YcIOadjSNasanXU8pPt0e0JBzH8ar8Ndbdz6MUPzG36OBjIW6fTbhJsRouI'
});
 
// https://www.yelp.com/developers/documentation/v3/business_search 
yelp.search({term: 'food', location: 'Merced', limit: 10})
.then(function (data) {
    
})
.catch(function (err) {
    console.error('ERROR', err);
});

app.get('/users', (req, res) => {
  knex('users').select('id', 'email').then((users) => {
    return res.status(200).json({users})
  })

})

app.post('/users', (req, res) => {
  console.log('request', req)
  const body = req.body;
  console.log(body)
  knex.insert({
    id    :  body.id,
    email : body.email
  }).into('users').then(id => {
    console.log(id)
    return res.status(201).json({})
  }).catch(e => {
    console.error(e);
    res.sendStatus(500);
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


