const tables = require('../data/table-data.js');
const waitinglist = require('../data/waitinglist-data.js');

module.exports = function(app) {
    app.get('/api/tables', function(req,res) {
        res.json(tables);
    });
};