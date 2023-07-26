const express=require("express");
const app=express();
app.use(express.json())


app.get("/",(req,res)=>{
  res.send("Working");
})

app.get("/numbers",async(req,res)=>{
    
})


app.listen(8008,()=>{
    console.log("Listening")
})