/***************************************
MODULES, PACKAGES
***************************************/
// NPM PACKAGES
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// listens either on PORT set by deployment or local PORT 3000
const PORT = process.env.PORT || 3000;

// parse application
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.setHeader("Content-type", "text/plain");
    res.end(JSON.stringify(req.body, null, 2));
});

app.get("/", function (req, res) {

});

app.listen(PORT, function() {
    console.log("Server has started on PORT 3000.");
});