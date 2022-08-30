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

//load the file contain in public folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//home route
app.get("/", function(req, res){
    res.render("home", {homeContent: homeStartingContent});
    // res.render("about", {aboutContents: aboutContent});
    // res.render("/contact", {contactContents: contactContent});

});

//about route
app.get("/about", function(req, res){
    res.render("about", {aboutContents: aboutContent });
});

//contact route
app.get("/contact", function(req, res){
    res.render("contact", {contactContents: contactContent});
});

//compose route
app.get("/compose", function(req, res){
    res.render("compose");
});

app.post("/compose", function(req, res){
    let item = req.body.blog;
    console.log(item);
    res.redirect("/");
});



// app.get("/", function(req, res){
//     res.render("home");
// });

// app.get("/about", function(req, res){
//     res.render("about");
// });

// app.get("/contact", function(req, res){
//     res.render("/contact");
// });


//listen to port 3000
app.listen(3000, function(req, res){
    console.log("server started on port 3000");
});