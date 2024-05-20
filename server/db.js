const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgres://kaqgqolj:XVyUZkhaEqfUn1vYlPcRPKvMPr27Zp9X@tiny.db.elephantsql.com/kaqgqolj",
});

pool.connect((err) => {
    if (err) throw err;
    console.log("Connected successfully to PostgreSQL");
});

module.exports = pool;
