const express=require("express");
const app=express();
app.use(express.json())


app.get("/",(req,res)=>{
  res.send("Working");
})

app.get("/numbers",async(req,res)=>{
    const q=req.query;
    const result=new set();
    

    console.log(q);
    res.send("working");
})


app.listen(8008,()=>{
    console.log("Listening")
})


// http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://abc.com/fibo