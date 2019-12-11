const tables = require('../data/table-data.js');
const waitlist = require('../data/waitinglist-data.js');

module.exports = function(app) {
    app.get('/api/tables', function(req,res) {
        res.json(tables);
    });
    app.get('/api/waitlist', function(req,res) {
        res.json(waitlist);
    });
};