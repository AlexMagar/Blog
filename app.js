//jshint esversion:6

//require packages
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
var _ = require("lodash");

let items = [];

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
    res.render("home", {
        homeContent: homeStartingContent, 
        posts: items
    });
    // res.render("about", {aboutContents: aboutContent});
    // res.render("/contact", {contactContents: contactContent});

});

//trap route parameters
app.get("/posts/:postName", function(req, res){
    let requestedTitle = _.lowerCase(req.params.postName);
    items.forEach(function(item){
        const storedTitle = _.lowerCase(item.title);

        if(storedTitle === requestedTitle){
            res.render("post",{
                postTitle: item.title,
                postDesc: item.content
            });
        }
    });
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

//post route
app.get("/post", function(req, res){
    res.render("post");
});


app.post("/compose", function(req, res){ 
    const post = {
        title: req.body.singleLineText,
        content: req.body.multiLineText
    };

    items.push(post);    
    res.redirect("/"); //redirect to home route
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