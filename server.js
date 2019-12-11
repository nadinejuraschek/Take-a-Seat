/***************************************
MODULES, PACKAGES
***************************************/
// CORE MODULES
const path = require('path');

// NPM PACKAGES
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// CUSTOM MODULES
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// listens either on PORT set by deployment or local PORT 3000
const PORT = process.env.PORT || 3000;

// parse application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("Server has started on PORT 3000.");
});