import express from "express";

const app = express();
const port = process.env.port || 5174;

app.get("/", (req,res) =>{
    res.send("Hola desarrollador!")
});
app.listen(port, (next)=>{
     console.log("servidor escuchando en el puerto http://servidor:", port);
     next;
     // 
 });