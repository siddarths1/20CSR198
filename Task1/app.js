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
    const result=[];
    
  const axiosPromises = q.map(async (i) => {
    try {
      await axios.get(i).then((resp)=>{
    
      console.log(resp.data.numbers);
      result=result.concat(resp.data.numbers);
      }).catch((err)=>{
        console.log("Not Found")
      });
    } catch (err) {
      console.log("Not Found");
    }
  });

  await Promise.all(axiosPromises);
  console.log(result);
  const response = new Set(result.sort((a, b) => a - b));
    console.log(response);

    res.send("working");
})


app.listen(8008,()=>{
    console.log("Listening")
})


// http://localhost:8008/numbers?url=http://20.244.56.144/numbers/primes&url=http://abc.com/fibo