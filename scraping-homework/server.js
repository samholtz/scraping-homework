const express = require("express");
const bodyParser = require("body-parser");
var cheerio = require("cheerio");
const app = express();

var databaseUrl = "scraper";
var collections = ["scrapedData"];

var db = mongojs(databaseUrl, collections);
db.on("erroor", function (error) {
    console.log("Database Error:", error);
});

app.get("/", function (req, res) {
    res.send("hello world");
})


app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
});