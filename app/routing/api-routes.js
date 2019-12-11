const tables = require('../data/table-data.js');
const waitlist = require('../data/waitinglist-data.js');

module.exports = function(app) {
    app.get('/api/tables', function(req,res) {
        res.json(tables);
    });
    app.get('/api/waitlist', function(req,res) {
        res.json(waitlist);
    });

    app.post('/api/tables', function(req, res) {
        if(tables.length < 5) {
            tables.push(req.body);
            res.json(true);
        } else {
            waitlist.push(req.body);
            res.json(false);
        }
    });

    app.post('/api/clear', function() {
        tables = [];
        waitlist = [];

        console.log(tables);
        console.log(waitlist);
    });
};
