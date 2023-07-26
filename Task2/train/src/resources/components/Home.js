import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function Home() {
const [token,setToken]=useState();

    useEffect(async()=>{
       await axios.post("http://20.244.56.144/train/auth",{
        companyName: "Train",
        clientID: "676d7987-3864-437e-9ef0-d2e7920fa98d",
        clientSecret: "DosQwekMuIpfDbtm",
        ownerName: "siddarths",
        ownerEmail: "siddarths.20cse@kongu.edu",
        rollNo: "20CSR198"
    }).then((res)=>{
        
        setToken(res.data.access_token);
    }).catch((err)=>{
        console.log(err);
    })
    await axios.get("http://20.244.56.144/train/trains",{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    },[])
  return (
    <div>Home</div>
  )
}
