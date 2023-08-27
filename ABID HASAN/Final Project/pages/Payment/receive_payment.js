import Link from "next/link";
import Layout from "../HLT/layout";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import MyFooter from "../HLT/footer";
import SessionCheck from "../HLT/sessioncheck";

const Header = dynamic(() => import('../HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('../HLT/title'),{
    ssr:false,
})

const Payment= ()=> {

    const router =useRouter();

    const[user,setUser]=useState({
        name:"",
        email:"",
        contact_number:1,
        location:"",
        amount:1
    });
    const {name,email,contact_number,location,amount}=user;

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value});
    };




    const handleSubmit= async (e)=>{
        e.preventDefault();
        user.contact_number=parseInt(user.contact_number);
        console.log(user)
        try{//post (process.env.SINGUP_TG) this will also work as a path finder /'http://localhost:3000/tourguide/registration'
            const response = await axios.post(process.env.NEXT_PUBLIC_TG+"/receivepayment",user,{
                
                headers:{
                    'Content-Type':'application/json'
                
                },
                withCredentials:true
            
                
                
            });
            console.log(response.data);
           // setSuccessMessage(response.data.message); //backend response with a success message
            alert("Payment Successful");
           
            router.push('/TourGuide/TG_profile');
        
    }
    catch(error){
        console.error('Error in creation: ',error);
        alert("Payment Failed");
    

    }
};


    return (
        <div className="bg-slate-600">
        <center>
        <h1 className="text-white p-24">Payment From</h1>
        <Title page="Payment Receive"></Title>
        <div >
            <SessionCheck/>
            <form className="inline-block" onSubmit={handleSubmit}>
                
                <lable className="texts">Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} value={name}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} value={email}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Phone Number &nbsp;
                <input type="number" id="contact_number" name="contact_number" placeholder="Phone Number" onChange={handleChange} value={contact_number}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="location" name="location" placeholder="Location" onChange={handleChange} value={location}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="amount" name="amount" placeholder="" onChange={handleChange} value={amount}></input>
                </lable>
                <br></br>
                <br></br>

                
                <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Confirm Payment</button>
            </form>

        </div>
               
                <Link className="" href="/TourGuide/TG_profile">PROFILE PAGE</Link>
                
        </center>
        <div>
            <center>
                <br></br>
                <MyFooter/>
            </center>
        </div>
        
        
        
        </div>
           
    )
}

export default Payment
