import React, { useEffect, useState } from 'react'
import axios from "axios";
export default function Train() {
    const [res,setres]=useState("Loading");
  useEffect(async()=>{
    const queryParams = new URLSearchParams(window.location.search);
    const no = queryParams.get('id');
    await axios.post("http://20.244.56.144/train/auth",{
        companyName: "Train",
        clientID: "676d7987-3864-437e-9ef0-d2e7920fa98d",
        clientSecret: "DosQwekMuIpfDbtm",
        ownerName: "siddarths",
        ownerEmail: "siddarths.20cse@kongu.edu",
        rollNo: "20CSR198"
    }).then(async(res)=>{
        await axios.get(`http://20.244.56.144/train/trains/${no}`,{headers: {
            'Authorization': `Bearer ${res.data.access_token}`}
          }).then((resp)=>{
            console.log(resp.data);
        }).catch((err)=>{
            setres("Invalid Train Number");
        })
      
    }).catch((err)=>{
        console.log(err);
    })
   
  })
    return (
    <div>{res}</div>
  )
}
