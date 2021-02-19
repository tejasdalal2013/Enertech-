var express = require('express')
var app = express()

app.get('/getUsers', (req,res) =>{
    res.send("Hello World")
})
app.get('/getTrain', (req,res) =>{

    var trainingobj = {
        trainingId : 10,
        trainingName : "Tejas Express Course",
        active: true
    }
    res.send(trainingobj)
})
app.listen(4000,function(req,res){
    console.log("We Are Now Connected")
})