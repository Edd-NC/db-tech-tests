const db = require("./connection.js");
const fs = require("fs/promises");

const seed = async() => {
    // Drop all tables within db
    await db.query("DROP TABLE IF EXISTS snacks");
    await db.query("DROP TABLE IF EXISTS movies");
    await db.query("DROP TABLE IF EXISTS actors");
    await db.query("DROP TABLE IF EXISTS people");

    //Insert data
    const tableActors = fs.readFile(`${__dirname}/../../challenges/challenge_2/buildTables/tableActors.sql`, "utf-8");
    const tableMovies = fs.readFile(`${__dirname}/../../challenges/challenge_2/buildTables/tableMovies.sql`, "utf-8");
    const tablePeople = fs.readFile(`${__dirname}/../../challenges/challenge_2/buildTables/tablePeople.sql`, "utf-8");
    const tableSnacks = fs.readFile(`${__dirname}/../../challenges/challenge_2/buildTables/tableSnacks.sql`, "utf-8");
    
    Promise.all([tablePeople, tableMovies, tableActors, tableSnacks])
    .then(async(data) => {
        const [people, movies, actors, snacks] = data;
        console.log(people);
        await db.query(actors);
        await db.query(snacks);
        await db.query(movies);
        await db.query(people);
    })
    .catch(error => console.log(error));
}

seed();

module.exports = seed;