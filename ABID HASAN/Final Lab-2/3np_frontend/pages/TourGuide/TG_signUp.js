import Link from "next/link";
import Layout from "../HLT/layout";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";



const Header = dynamic(() => import('../HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('../HLT/title'),{
    ssr:false,
})

const Signup= ()=> {

    const router =useRouter();

    const[user,setUser]=useState({
        name:"",
        email:"",
        contact_number:1,
        password:"",
        filename:""
    });
    const {name,email,contact_number,password,filename}=user;

    const handleChange = (e)=>{
        setUser({ ...user,[e.target.name]:e.target.value});
    };

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [contact_number, setPhone] = useState('');
    // const [password, setPassword] = useState('');
    // const [filename, setFile] = useState('');
    // const [error, setError]= useState('');
    // const [success, setSuccessMessage] = useState('');
    
    // const handleChangeName = (e) => {

    //     setName(e.target.value);
    // };

    // const handleChangeEmail = (e) => {

    //     setName(e.target.value);
    // };

    // const handleChangePhone= (e) => {

    //     setName(e.target.value);
    // };

    // const handleChangePassword = (e) => {

    //     setName(e.target.value);
    // };

    // const handleChangeFile = (e) => {

    //     setName(e.target.value);
    // };
    



    const handleSubmit= async (e)=>{
        e.preventDefault();
        user.contact_number=parseInt(user.contact_number);
        console.log(user)
        try{//post (process.env.SINGUP_TG) this will also work as a path finder /'http://localhost:3000/tourguide/registration'
            const response = await axios.post(process.env.NEXT_PUBLIC_SINGUP_TG+"/registration",user,{
                
                headers:{
                    'Content-Type':'application/json'
                }
            
                // name, 
                // email,
                // contact_number,
                // password,
                // file,
                
            });
            console.log(response.data);
           // setSuccessMessage(response.data.message); //backend response with a success message
            alert("Registration Successful");
           

            //clear input after registration
            // setName('');
            // setEmail('');
            // setPassword('');
            // setPhone('');
            // setFile('');
            router.push('TG_logIn');
        
    }
    catch(error){
        console.error('Error Singing Up',error);
        alert("Registration Failed");
    

    }
};


    return (
        <>
        <center>
        <h1>Registration From</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <lable>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange} value={name}></input>
                </lable>
                <br></br>
                <br></br>

                <lable>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange} value={email}></input>
                </lable>
                <br></br>
                <br></br>

                <lable>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} value={password}></input>
                </lable>
                <br></br>
                <br></br>

                <lable>Phone Number &nbsp;
                <input type="number" id="contact_number" name="contact_number" placeholder="Phone Number" onChange={handleChange} value={contact_number}></input>
                </lable>
                <br></br>
                <br></br>

                <lable>File &nbsp;
                <input type="file" name="filename" onChange={handleChange} value={filename}></input>
                </lable>
                <br></br>
                <br></br>

                <button type="submit">Confirm</button>
            </form>

        </div>
                <p>Already Have An Account <Link href="TG_logIn"> Log In</Link></p>
                <Link href="/"> Home</Link>

        </center>
        
        
        
        </>
           
    )
}

export default Signup

// pattern="[+]{1}[0-9]{3}-[0-9]{4}-[0-9]{6}"