const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send("Hello World")
})
app.get('/tejas',function(req,res){
    const id = req.query.id
    res.send("Welcome Back Tejas " + id)
})
app.get('/tejas/:id',function(req,res){
    const id = req.params.id
    res.send("Hey Tejas How Are You "  + id)
})

app.listen(9000,function(req,res){
    console.log("Running..")
})