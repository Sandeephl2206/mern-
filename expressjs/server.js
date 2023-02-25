const express = require('express');
const app = express();
const PORT = 4000;
const friends = [
    {
        id: 0,
        name: "Sandeep Lohar"
    },
    {
        id: 1,
        name: "deep Lohar"
    },
    {
        id: 2,
        name: "Mandeep Lohaar"
    }
]
app.get('/',(req,res)=>{
    res.send("hello")
})
app.get("/friend",(req,res)=>{
    res.json (friends);
})
app.get("/friend/:friendis",(req,res)=>{
    const friendis = req.params.friendis;
    const friend = friends[friendis];
    if(friend){
        res.sendStatus(200).send(friend);
    }
    else{
        res.sendStatus(404);
    }
})
app.post("/friend",(req,res)=>{
    res.send("hello dear updating....")
})
app.listen(PORT, () => {
    console.log("server created");
});