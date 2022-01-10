const { Pool } = require("pg");
const path = require("path");

require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
})

process.env.PGDATABASE = "dbtechtest";

if(!process.env.PGDATABASE) {
    throw new Error("PGDATABASE not set");
}

module.exports = new Pool();