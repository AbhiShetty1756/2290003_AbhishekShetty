var express = require("express");
var app=express();
var path=require("path");


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,"./public/index.html"));
})

app.listen(8081);
console.log("listening at port 8081")