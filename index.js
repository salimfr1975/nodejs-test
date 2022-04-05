const express = require("express");
const app=express();


app.get("/",(req,res)=>
{
    
    res.sendFile(__dirname + "/index.html");
});
app.get("/contact",(req, res)=>
{
    res.send("Thank you for contacting us");   
});

app.get("/submit",(req,res)=>
{
    res.send("Submitted");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('Started At ${PORT}'));