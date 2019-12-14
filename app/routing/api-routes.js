var tables = require('../data/table-data.js');
var waitlist = require('../data/waitinglist-data.js');

module.exports = function(app) {
    app.get('/api/tables', function(req,res) {
        res.json(tables);
    });
    app.get('/api/waitlist', function(req,res) {
        res.json(waitlist);
    });

    app.post('/api/tables', function(req, res) {
        console.log(req.body);

        if(tables.length < 5) {
            tables.push(req.body);
            res.json(tables);
        } else {
            waitlist.push(req.body);
            res.json(false);
        }
    });

    app.post('/api/clear', function() {
        tables.length = 0;
        waitlist.length = 0;

        res.json({ ok: true });
    });
};
