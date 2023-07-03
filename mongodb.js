const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin-gokulkannan:Gokul%40003@cluster0.yecwj5g.mongodb.net/logininnumvai?authSource=Cluster0&authMechanism=SCRAM-SHA-1")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})

const Loginschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const collection=new mongoose.model("Collection",Loginschema);

module.exports=collection;