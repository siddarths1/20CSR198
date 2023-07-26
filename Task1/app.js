const express=require("express");
const axios=require("axios");
const bodyparser = require('body-parser')




const app=express();
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(express.json())


app.get("/",(req,res)=>{
  res.send("Working");
})

app.get("/numbers",async(req,res)=>{
    const q=req.query.url;
    const result=new Set();
    q.map(async(i)=>{
        await axios.get(i).then((resp)=>{
            
            console.log(resp.data.numbers);
        }).catch((err)=>{
            console.log("Not Found");
        })

    })
    //   q.forEach(i=>{
    //     console.log(i);
    //   }
    //   )
    console.log(q);
    // console.log(result);
    res.send("working");
})


app.listen(8008,()=>{
    console.log("Listening")
})


// http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://abc.com/fibo