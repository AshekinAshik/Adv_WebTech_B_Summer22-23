
import React, { useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Layout from "../HLT/layout";

export default function DeleteAccount(){

  const [successMessage, setSuccessMessage] = useState('');

    // const [id,setId] = useState("");
    // const handleIdChange =(e)=>{
    //     setId(e.target.value);
    // }
    const handleDeleteAccount= async(event) =>{
        event.preventDefault()
        
          axios.delete(process.env.NEXT_PUBLIC_SINGUP_TG+"/delete")
          .then((response)=>{
            console.log(response)
            alert("Delete Successful")
            // router.push('TourGuide/TG_profile');
            setSuccessMessage(' succesfully deleted profile')

          })
          .catch((error)=>{
            console.error('Error Updating Profile:', error);
          })
            
            
        };
    
        
    
    

    return (
    <>
      <Layout>
      <h2>Are you sure you want to delete your account?</h2>
      <button onClick={handleDeleteAccount}>Delete Account</button>
      <p>{successMessage}</p>
      </Layout>
    </>
  );

    }
