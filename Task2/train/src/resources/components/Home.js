import React, { useEffect } from 'react'

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
    },[])
  return (
    <div>Home</div>
  )
}
