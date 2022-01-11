const db = require("../../.functionality/db/connection.js");
const {insertData, dropTables} = require("../../.functionality/db/insertData.js");

afterAll(() => db.end());

describe("Table Insertion", () => {
    test("Adds tables into a database", async() => {
        await dropTables();
        await insertData()
        .catch(error => {
            expect(error).toBe(null);
        });

        const actorsQuery = db.query("SELECT * FROM actors");
        const snacksQuery = db.query("SELECT * FROM snacks");
        const moviesQuery = db.query("SELECT * FROM movies");
        const peopleQuery = db.query("SELECT * FROM people");

        await Promise.all([actorsQuery, snacksQuery, moviesQuery, peopleQuery])
        .then(([actors, snacks, movies, people]) => {
            expect(actors.rowCount).toBe(0);
            expect(snacks.rowCount).toBe(0);
            expect(movies.rowCount).toBe(0);
            expect(people.rowCount).toBe(0);
        })
        .catch(error => expect(error).toBe(null));
    })
})