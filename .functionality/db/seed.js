const {dropTables, insertData} = require("./insertData.js");

const seed = async() => {
    await dropTables()
    await insertData()
}

seed();

module.exports = seed;