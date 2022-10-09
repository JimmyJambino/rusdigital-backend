var sqlite3 = require('sqlite3')

var open = require('sqlite')
open = open.open

var db = await open({
    filename: "test.db",
    driver: sqlite3.Database
})
db.get(`PRAGMA foreign_keys = ON`) // Allows foreign keys

module.exports = db;