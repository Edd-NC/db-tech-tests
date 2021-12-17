const snacks = require("./data/snacks.js");
const people = require("./data/people.js");
const movies = require("./data/movies.js");

const obj = {};

movies.forEach(movie => obj[movie.genre] ? obj[movie.genre]++ : obj[movie.genre] = 1);

console.log(obj, movies.length)