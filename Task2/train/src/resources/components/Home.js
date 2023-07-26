import React, { useEffect } from 'react'
import axios from "axios";
export default function Home() {
    useEffect(async()=>{
       await axios.post("http://20.244.56.144/train/auth",{
        companyName: "Train",
        clientID: "676d7987-3864-437e-9ef0-d2e7920fa98d",
        clientSecret: "DosQwekMuIpfDbtm",
        ownerName: "siddarths",
        ownerEmail: "siddarths.20cse@kongu.edu",
        rollNo: "20CSR198"
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
    // await axios.get("http://20.244.56.144/train/trains").then((res)=>{
    //     console.log(res);
    // }).catch((err)=>{
    //     console.log(err);
    // })
    },[])
  return (
    <div>Home</div>
  )
}
