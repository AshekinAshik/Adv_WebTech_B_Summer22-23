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

const Addtraveller= ()=> {

    const router =useRouter();
    const [error, setError] = useState('');
    const[user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        contact_number:1,
        age:1,
        gender:"",
        profession:"",
        //tourguideID:1,
    });
    const {name,username,email,contact_number,age,gender,profession}=user;

    const handleChange = async (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value});
    };

    


    const handleSubmit= async (e)=>{
        e.preventDefault();
        user.contact_number=parseInt(user.contact_number);
        user.tourguideID = parseInt(user.tourguideID);
        user.age=parseInt(user.age);
        console.log(user)
        if(!user){
            setError("required All field")
        }
        try{//post (process.env.SINGUP_TG) this will also work as a path finder /'http://localhost:3000/tourguide/registration'
            const response = await axios.post(process.env.NEXT_PUBLIC_TG+'/addtraveller',user,{ 
                
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            
                // name, 
                // email,
                // contact_number,
                // password,
                // file,
                
            });
            console.log(response.data);
           // setSuccessMessage(response.data.message); //backend response with a success message
            alert("Traveller Registration Successful");
           

            //clear input after registration
            // setName('');
            // setEmail('');
            // setPassword('');
            // setPhone('');
            // setFile('');
            router.push('/TourGuide/TG_profile');
        
    }
    catch(error){
        console.error('Error Singing Up',error);
        alert("Traveller Registration Failed");
    

    }
};


    return (
        <div className="bg-slate-600">
        <center>
            <Title page="Traveller Registration Form"></Title>
        <h1 className="text-orange-500"><b> Traveller Registration From</b></h1>
        <br></br>
        <div>
            <SessionCheck/>
            <form className="inline-block" onSubmit={handleSubmit}>
                <lable className="texts">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} value={name}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">User-Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="username" name="username" placeholder="UserName" onChange={handleChange} value={username}></input>
                </lable>
                <br></br>
                <br></br>


                <lable className="texts">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} value={email}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Phone Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="contact_number" name="contact_number" placeholder="Phone Number" onChange={handleChange} value={contact_number}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="age" name="age" placeholder="" onChange={handleChange} value={age}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="gender" name="gender" placeholder="Gender" onChange={handleChange} value={gender}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Profession &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="profession" placeholder="Profession" onChange={handleChange} value={profession}></input>
                </lable>
                <br></br>
                <br></br>

                {/* <lable className="texts">TourGuide ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="" name="tourguideID" placeholder="ID" onChange={handleChange} value={tourguideID}></input>
                </lable>
                <br></br>
                <br></br> */}


                {error && <p>{error}</p>}
                <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Confirm</button>
            </form>

        </div>
                <Link className="text-green-600 bg-gray-200 p-2 rounded-lg" href="/Traveller/traveller_list">Go To Traveller List</Link><br></br><br></br>
                <Link className="text-green-600 bg-gray-200 p-2 rounded-lg" href="/TourGuide/TG_profile">TourGuide Profile</Link>
                

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

export default Addtraveller

// pattern="[+]{1}[0-9]{3}-[0-9]{4}-[0-9]{6}"