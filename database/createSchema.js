var db = require('./database/createConnection')

async function makeSchemas() {
    await db.exec(`DROP TABLE IF EXISTS accounts;
        CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(50) NOT NULL
    );`)
}

async function createAccount(name) {
    db.run(`INSERT INTO accounts (name) VALUES (?)`, [name])
}

async function readAll() {
    var result = await db.all(`SELECT * FROM accounts`)
    return result
}

module.exports = {makeSchemas, createAccount, readAll}