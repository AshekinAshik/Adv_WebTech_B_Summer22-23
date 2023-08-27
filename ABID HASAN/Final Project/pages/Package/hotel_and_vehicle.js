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

const Signup= ()=> {

    const router =useRouter();

    const[user,setUser]=useState({
        hotelname:"",
        hoteltype:"",
        hotellocation:"",
        stayamount:1,
        vehiclename:"",
        vehicletype:"",
        startdestination:"",
        Enddestination:"",
        travelamount:1

    });
    const {hotelname,hoteltype,hotellocation,stayamount,vehiclename,vehicletype,startdestination,Enddestination,travelamount}=user;

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value});
    };

    
    const handleSubmit= async (e)=>{
        e.preventDefault();
        // user.contact_number=parseInt(user.contact_number);
        console.log(user)
        try{//post (process.env.SINGUP_TG) this will also work as a path finder /'http://localhost:3000/tourguide/registration'
            const response = await axios.post(process.env.NEXT_PUBLIC_TG+"/bookhotelandvehicle",user,{
                
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            
                
                
            });
            console.log(response.data);
           // setSuccessMessage(response.data.message); //backend response with a success message
            alert("Booking Vehicle and Hotel are Successful");
           

            router.push('/TourGuide/TG_profile');
        
    }
    catch(error){
        console.error('Error in Booking Up',error);
        alert("Booking Failed");
    

    }
};


    return (
        <div className="bg-slate-600">
        <center>
            <br></br>
        <h1 className="text-white">Hotel and Vehicle Form</h1>
        <br></br>
        <div>
            <SessionCheck/>
            <form className="inline-block" onSubmit={handleSubmit}>

                <lable className="texts">Hotel Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="hotelname" placeholder="Name" onChange={handleChange} value={hotelname}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Hotel Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="hoteltype" placeholder="Type" onChange={handleChange} value={hoteltype}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Hotel Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="hotellocation" placeholder="H-Location" onChange={handleChange} value={hotellocation}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Staying Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="stayamount" placeholder="Amount" onChange={handleChange} value={stayamount}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Vehicle Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="vehiclename" placeholder="Name" onChange={handleChange} value={vehiclename}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Vehicle Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="vehicletype" placeholder="Type" onChange={handleChange} value={vehicletype}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Start Destination &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="startdestination" placeholder="Destination" onChange={handleChange} value={startdestination}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">End Destination &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"  name="Enddestination" placeholder="Destination" onChange={handleChange} value={Enddestination}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Travelling Amount &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" name="travelamount" placeholder="Amount" onChange={handleChange} value={travelamount}></input>
                </lable>
                <br></br>
                <br></br>

                
                <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  type="submit">Confirm</button>
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

export default Signup