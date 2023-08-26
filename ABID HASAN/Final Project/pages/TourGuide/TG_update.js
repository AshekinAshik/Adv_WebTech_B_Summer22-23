import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "../HLT/layout";
import { useEffect, useState } from "react";
import Separator from "../HLT/separate";
import SessionCheck from "../HLT/sessioncheck";

const Header = dynamic(() => import('../HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('../HLT/title'),{
    ssr:false,
})


const UpdateTourGuide = ()=> {
    //const [sname, setSName] = useState('');

    const router =useRouter();
    useEffect(()=>{
        if(typeof window != 'undefined')
        {
            const session =sessionStorage.getItem('name');
            // if(session){
                
            // }
        }
    },[]);

    const [user, setUser] = useState({
        name:"",
        email:"",
       contact_number:1,
        password:"",
        filename:""
    });

    const {name,email,contact_number,password,filename} = user;

    const handleChange = (e)=>{
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    const handleSubmit= async (e)=>{
        e.preventDefault();
        user.contact_number=parseInt(user.contact_number);
        console.log(user);

        try{
           const response= await axios.put(process.env.NEXT_PUBLIC_TG+"/updatetourguideinfo", user,{

                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true

            });
                
                    if(response.status==201)
                    console.log(response.data);
                   // setSuccessMessage('profile Update Successful'); //backend response with a success message
                     alert("Update Successful");
                    sessionStorage.removeItem('name');
                    setUser(null);
                    document.cookie='';
                     router.push('/TourGuide/TG_logIn');
                    window.location.reload();
                    

                
        //     console.log(response.data);
        //    // setSuccessMessage(response.data.message); //backend response with a success message
        //     alert("Update Successful");
           
        //router.push('/TG_logIn');
            }        
        catch(error){
            console.error('Error Update Porfile:', error);
            alert("Update Failed");
        }
        
    
    
};




    return (
        <>
            <Title page="Update TourGuide"></Title>
            <Separator title = "THIS IS THE UPDATE PAGE"></Separator>
            <SessionCheck/>
            <center>

                <h1>Update TourGuide</h1>
                
                <form onSubmit={handleSubmit}>

                <lable>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={name}/>
                </lable>
                <br></br>
                <br></br>

                <lable>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={email}></input>
                </lable>
                <br></br>
                <br></br>

                <lable>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" id="password" name="password" placeholder="Password" onChange={handleChange} value={password}></input>
                </lable>
                <br></br>
                <br></br>

                <lable>Phone Number &nbsp;
                <input type="tel" id="contact_number" name="contact_number" placeholder="Phone Number" onChange={handleChange} value={contact_number}></input>
                </lable>
                <br></br>
                <br></br>

                <lable>File &nbsp;
                <input type="file" name="filename" onChange={handleChange} value={filename}></input>
                </lable>
                <br></br>
                <br></br>


               <button>Update</button>
               </form>
               {/* <p>{successMessage}</p> */}
               <br></br><br></br>
            
                <Link href="TG_profile">TourGuide Profile</Link><br></br><br></br>
                

           </center>
            
            
        </>
    )
}
export default UpdateTourGuide


//name, username, email, contact, age, gender,profession
