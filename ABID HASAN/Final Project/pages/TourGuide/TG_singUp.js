import Link from "next/link";
import Layout from "../HLT/layout";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import MyFooter from "../HLT/footer";



const Header = dynamic(() => import('../HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('../HLT/title'),{
    ssr:false,
})

const Signup= ()=> {

    const router =useRouter();
    

    // const[user,setUser]=useState({
    //     name:"",
    //     email:"",
    //     contact_number:1,
    //     password:"",
    //     filename:""
    // });
    // const {name,email,contact_number,password,filename}=user;

    // const handleChange = (e)=>{
    //     setUser({ ...user,[e.target.name]:e.target.value});
    // };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact_number, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [filename, setFile] = useState('');
    const [error, setError]= useState('');
    const [success, setSuccessMessage] = useState('');
    
    const handleChangeName = (e) => {

        setName(e.target.value);
    };

    const handleChangeEmail = (e) => {

        setEmail(e.target.value);
    };

    const handleChangePhone= (e) => {

        setPhone(e.target.value);
    };

    const handleChangePassword = (e) => {

        setPassword(e.target.value);
    };

    const handleChangeFile = (e) => {

        setFile(e.target.value);
    };
    
    const isValidEmail = (email) => {
        const emailPattern = /^\S+@\S+\.\S+$/;
        return emailPattern.test(email);
      };
    const isValidName = (name) => {
        const namePattern = /^[a-z A-Z]+$/;
        return namePattern.test(name);
      };

    const isValidPassword = (password)=>{
        const passwordPattern = /^\d+$/;
        return passwordPattern.test(password);
    }

    const isValidContact = (contact_number)=>{
        const contact_numberPattern = /^\d+$/;
        return contact_numberPattern.test(contact_number);
    }

    const isValidFile = (filename)=>{
        const filenamePattern = /\.(jpg|jpeg|pdf)$/i;
        return filenamePattern.test(filename);
    }


    const handleSubmit= async (e)=>{
        e.preventDefault();
        // user.contact_number=parseInt(user.contact_number);
        // console.log(user)
        if(!name || !email || !password || !contact_number || !filename){
            setError('All fields are requires')
        }
        else if (!isValidEmail(email)) {
            setError('Invalid email address');
          } 
          else if(!isValidName(name)){
              setError('Only contain Upper or Lower Charecter')
          } 
          else if(!isValidPassword(password)){
              setError('Only Contain number')
          }
          else if(!isValidContact(contact_number)){
            setError('Only Contain Number')
        }
        else if(!isValidFile(filename)){
            setError('Contain Jpg Pdf and Jpeg any of them')
        }
        else{
            const res = await doSingUp(name, email, password,contact_number,filename)
            console.log(res);
        }
    }

    async function doSingUp(name, email, password, contact_number, filename){
        try{//post (process.env.SINGUP_TG) this will also work as a path finder /'http://localhost:3000/tourguide/registration'
            const response = await axios.post(process.env.NEXT_PUBLIC_TG+"/registration",{name,email,password,contact_number,filename},{
                
                headers:{
                    'Content-Type':'application/json'
                }
                
                // this  field are need to pass by the parameter 
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
            setError('');
            router.push('TG_logIn');
        
    }
    catch(error){
        setError(error)
        console.error('Error Singing Up',error);
       alert("Registration Failed");
    

    }
};


    return (
        <div className="bg-slate-600 p-16">
        <center>
            <Title page="Registration"></Title>
        <div >
        
        <h1 className="text-white"><b>REGISTRATION FORM</b></h1>
        <br></br>
        <div>
            <form className="inline-block" onSubmit={handleSubmit}>
                <lable className="texts">Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleChangeName} value={name}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleChangeEmail} value={email}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChangePassword} value={password}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">Phone Number &nbsp;
                <input type="number" id="contact_number" name="contact_number" placeholder="Phone Number" onChange={handleChangePhone} value={contact_number}></input>
                </lable>
                <br></br>
                <br></br>

                <lable className="texts">File &nbsp;
                <input className="mt-2" type="file" name="filename" onChange={handleChangeFile} value={filename}></input>
                </lable>
                <br></br>
                <br></br>
                {error && <p>{error}</p>}
                <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Confirm</button>
            </form>

        </div>
                <p className="font-bold">Already Have An Account <Link className="ocus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-800 bts" href="TG_logIn"> Log In</Link></p>
                <Link className="mt-8 texts" href="/"><b>Home</b></Link>
                {/* <Link href="/">GO TO Home</Link> */}
                <br></br><br></br>
                </div>
        </center>
        <div>
            <center>
                <MyFooter/>
            </center>
        </div>
        
        
        
        </div>
           
    )
}

export default Signup

// pattern="[+]{1}[0-9]{3}-[0-9]{4}-[0-9]{6}"