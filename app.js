const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var faker = require('faker');

//routes
app.get("/", function(req,res) {
    res.render("index.ejs", {"randomName":faker.name.findName()});
});

app.get("/linux", function(req, res) {
    res.render("linux.html");
});

app.get("/macOS", function(req, res) {
    res.render("macOS.html");
});

app.get("/windows", function(req, res) {
    res.render("windows.html");
});

//starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});