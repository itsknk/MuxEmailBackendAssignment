require('rootpath')();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('helper/jwt');
const eHandle = require('helper/errHandler');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/userController'));

// global error handler
app.use(eHandle);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
