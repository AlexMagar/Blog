//jshint esversion:6

//require packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const homeStartingContent ="Something for now";
const aboutContent = "Also something for now";
const contactContent = "Also the somethig for now";

//creating express constant
const app = express();

app.set("view engine", "ejs");

//send text to browser
app.get("/", function(req, res){
    res.render("home", {homeContent: homeStartingContent});
});

//load the file contain in public folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("home");
});



//listen to port 3000
app.listen(3000, function(req, res){
    console.log("server started on port 3000");
});