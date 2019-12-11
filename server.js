const express = require('express');
const app = express();

app.get("/", function (req, res) {

});

app.listen(3000, function() {
    console.log("Server has started on PORT 3000.");
});