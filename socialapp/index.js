const express = require("express");
const format = require('date-format')
const app = express();

const port = 5000 || process.env.PORT;

app.get("/", (req, resp) => {
    resp.status(200).send("Hello Raj");
})

app.get("/api/v1/instagram", (req, resp) => {
    const instagramSocial = {
        username: "krcpr007",
        followers: 55,
        following: 66,
        date: format.asString("dd[MM]-hh:mm:ss",new Date()),
    };
    resp.status(200).json(instagramSocial);
})
app.get("/api/v1/facebook ", (req, resp) => {
    const instagramSocial = {
        username: "krcpr007",
        followers: 55,
        following: 66,
        date: Date.now(),
    };
    resp.status(200).json(instagramSocial);
})
app.get("/api/v1/linkedin", (req, resp) => {
    const instagramSocial = {
        username: "krcpr007",
        followers: 55,
        following: 66,
        date: Date.now(),
    };
    resp.status(200).json(instagramSocial);
})
app.listen(port, () => {
    console.log(`App is listing at Port ${port}`)
})
