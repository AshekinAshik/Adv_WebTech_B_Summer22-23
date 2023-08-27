
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Layout from "../HLT/layout";
import SessionCheck from "../HLT/sessioncheck";
import { useRouter } from "next/router";
import MyFooter from "../HLT/footer";

export default function DeleteAccount(){

  const [successMessage, setSuccessMessage] = useState('');
  const [name, setName] = useState('');

  const router = useRouter();
    // const [id,setId] = useState("");
    // const handleIdChange =(e)=>{
    //     setId(e.target.value);
    // }

    useEffect(()=>{
      if(typeof window !== 'undefined')
      {
        const session =sessionStorage.getItem('name');
        if(session){
            setName(sessionStorage.getItem('name'));

        }
      }
    },[]);

    const handleDeleteAccount= async(event) =>{
        event.preventDefault()
        try{
          const response= await axios.delete(process.env.NEXT_PUBLIC_TG+"/delete",{withCredentials: true})
          
            if(response.status == 201){
            console.log(response)
            alert("Delete Successful")
            sessionStorage.removeItem('name');
            setName(null);
            document.cookie='';
            router.push('/TourGuide/TG_logIn');
            setSuccessMessage(' succesfully deleted profile')
            window.location.reload();

            }
            else{
                console.error('Delete Failed:', response)
            }
          }
          catch(error){
            console.error('Error Updating Profile:', error);
            alert("Failed!")
          }
        }
            
            
        
    
        
    
    

    return (
    <div className="bg-slate-600"> 
    <SessionCheck/>
      <Layout/>
      <br></br>
        <center>
      <h2 className="text-red-500 text-xl font-semibold">ARE YOUR SURE YOU WANT TO DELETE YOUR ACCOUT? </h2>
      <h2 className="text-red-500 text-xl font-semibold">CLICK THE BUTTON BELOW TO DELETE YOUR ACCOUNT</h2>
      <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleDeleteAccount}>Delete Account</button>
      <p>{successMessage}</p>
      </center>
      <MyFooter/>
      
    </div>
    );

    }
