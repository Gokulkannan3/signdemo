const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const path=require("path");
const ejs = require ("ejs");
const collection=require("./mongodb");

const app=express();
app.set("view engine" , "ejs");
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.render(
        "index"
    )
});

app.post("/",async(req,res) =>{
    const data={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address
    }

    await collection.insertMany([data])
    res.send("success")
})


app.listen(3000,function(){
    console.log("Server run in 3000");
});



