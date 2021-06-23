const express = require("express");
const app = express();
const Post = require("./api/post");
const postData = new Post();


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req,res) => {
    res.status(200).send("Hello World!");
});

app.get("/greeting", (req,res) => {
    res.status(200).send("Good Evening!");
});

app.get("/api/posts", (req,res) => {
    res.status(200).send(postData.get());
})

app.listen(3000, () => { console.log("App listnening on port: 3000")});