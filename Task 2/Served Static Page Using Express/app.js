// Serving Static Page using Express

var express = require("express")
var app = express()
var path = require("path")

app.use(express.static(path.join(__dirname,"public")))

app.get("/",function(req,res){

    res
        .status(200)
        .sendFile(path.join(__dirname,"public","index.html"))
})
app.listen(8080,function(){
    console.log("We Are Connecting To Port")
})