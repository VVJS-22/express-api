const express = require("express");
const app = express();
const serverless = require("serverless-http");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const Post = require("./api/post");
const postData = new Post();


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());


router.get("/", (req,res) => {
    res.status(200).send("Hello World!");
});


router.get("/greeting", (req,res) => {
    res.status(200).send("Good Evening!");
});

router.get("/api/posts", (req,res) => {
    res.status(200).send(postData.get());
});

router.post("/api/posts",upload.none(), (req,res) => {
    const newPost = {
        "name": req.body.name,
        "gender": req.body.gender,
        "place": req.body.place
    }
    postData.add(newPost);
    res.status(200).send("ok");
})

app.use('./netlify/functions/app',router)


// app.listen(3000, () => { console.log("App listnening on port: 3000")});

module.exports.handler = serverless(app);