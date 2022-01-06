// const createDB = require("./createDB.js");
const { exec } = require("child_process");
const fs = require("fs/promises");

describe("Create Database", () => {
    test("Creates a database when the logic is invoked", async() => {
        const result = await fs.readFile(`${__dirname}/createDB.sql`, "utf-8")
            .then(contents => {
                return /^CREATE DATABASE dbTechTest;$/im.test(contents);
            })
        expect(result).toBe(true);
    })
    test("Drops the database when the logic is invoked", async() => {
        const result = await fs.readFile(`${__dirname}/createDB.sql`, "utf-8")
            .then(contents => {
                return /^DROP DATABASE IF EXISTS dbTechTest;$/im.test(contents);
            })
        expect(result).toBe(true);
    })
})