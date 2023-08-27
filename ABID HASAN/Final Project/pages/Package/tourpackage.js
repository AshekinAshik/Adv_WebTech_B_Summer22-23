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

const TourPack= ()=> {

    const router =useRouter();

    const[user,setUser]=useState({
        name:"",
        startdestination:"",
        enddestination:"",
        totalduration:1,
        totalamount:1
        
    });
    const {name,startdestination,enddestination,totalduration,totalamount}=user;

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value});
    };

    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        // user.contact_number=parseInt(user.contact_number);
        console.log(user)
        try{//post (process.env.SINGUP_TG) this will also work as a path finder /'http://localhost:3000/tourguide/registration'
            const response = await axios.post(process.env.NEXT_PUBLIC_TG+"/createtourpack",user,{
                
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            
                
                
            });
            console.log(response.data);
           // setSuccessMessage(response.data.message); //backend response with a success message
            alert("TorPack Creation Successful");
           

            
            router.push('/TourGuide/TG_profile');
        
    }
    catch(error){
        console.error('Error creating pack',error);
        alert("Creation Failed");
    

    }
};


    return (
        <div className="bg-slate-600 p-16">
        <center><br></br>
        <Title page="Create Tourpack"></Title>
        <h1 className="text-white">TOUR-PACK CREATION FORM</h1>
        <br></br>
        <div>
            <SessionCheck/>
            <form className="inline-block" onSubmit={handleSubmit}>
                <lable className="texts">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="name" placeholder="Name" onChange={handleChange} value={name}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Start Destination &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="startdestination" placeholder="Start Location" onChange={handleChange} value={startdestination}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">End Destination &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="enddestination" placeholder="End Location" onChange={handleChange} value={enddestination}></input>
                </lable>
                <br></br>
                <br></br>
                
                <lable className="texts">Total-Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="totalduration" placeholder="Days" onChange={handleChange} value={totalduration}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Total-Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="totalamount" placeholder="Taka" onChange={handleChange} value={totalamount}></input>
                </lable>
                <br></br>
                <br></br>

                
                <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Confirm</button>
            </form>

        </div>
          <Link className="" href="/TourGuide/TG_profile">Profile Page</Link>
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

export default TourPack