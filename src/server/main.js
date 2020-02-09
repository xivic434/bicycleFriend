import express from "express";
const app = express();
let port = 3000;


app.use("/", express.static(__dirname + '/../public'));

app.get("/hello",(req,res )=>{
    return res.send("can you hear");
});

import posts from './server';

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});