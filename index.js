const express = require('express');
const app = express();
// Install dotenv npm package so that you can import .env Elements inside this serverfile  
require('dotenv').config();

//app.get("routerName",MiddleWareFunction,MiddleWareFunction2,CallBackFunction)
app.get("/message",(req,res,next)=>{
    let queryName = req.query
        //string.toUpperCase()
    console.log(queryName)
    console.log(req.query.name.toUpperCase())
    console.log(req.query.lastName.toUpperCase())
    next();
},(req,res)=>{
    res.json({message : "Hello World"});
})

let PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`This server is running on ${PORT}`)
})