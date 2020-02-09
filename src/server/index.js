const express = require('express');
const app = express();

app.use(express.static("dist"));


app.get("/api/getUsername" , (req,res)=>{
    const data = {
        id : 1 , name : "wonjaeho"
    };
    res.json(data);
})


app.listen(3000, ()=> { console.log("Listening on Port 3000! ")});
