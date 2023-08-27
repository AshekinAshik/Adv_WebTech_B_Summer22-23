import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"; 
import SessionCheck from "./sessioncheck";


const Logform =()=>{
    const  [name, setName] = useState('');
    const router = useRouter();

    useEffect(()=>{
        if(typeof window !== 'undefined')
        {
            const session = sessionStorage.getItem('name');
            if(session){
                setName(sessionStorage.getItem('name'));
            }
        }

    },[]);

    async function Logout(){
        try{
            const response = await axios.post(process.env.NEXT_PUBLIC_TG + '/logout',null,
            {
                withCredentials:true,
            });

            if(response.status == 201){
                sessionStorage.removeItem('name');
                setName(null);
                document.cookie=''; //clear cookie
                router.push('../TourGuide/TG_logIn');
            }
            else{
                console.error('Log Out failed:', response);
            }
        }catch(error){
            console.error('Log Out error:', error);
        }
    }



    return(
        <>
        <SessionCheck/>
        <p> ARE YOU SURE YOU WANT TO LOG OUT </p>
        
        <button onClick={Logout}>Log Out</button>
        </>
    )

}
export default Logform

















































// import { headers } from "@/next.config";

// import { createContext, useContext, useState } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({children}) =>{

//     const [user, setUser]= useState(null);

//     const login = (name, cookie)=>{
//         setUser({name, cookie});
//     };

//     const checkUser = ()=>{
//         console.log("user : "+user.name)
//         console.log("user: "+user.cookie)
//         if(user.name!=null && user.cookie!=null){
//             return true;
//         }
//         else{
//             return false;
//         }
//     };
    
//     const logout = async ()=>{
//         try{
            
//         const response = await axios.post(process.env.NEXT_PUBLIC_TG+'/logout',null,{
//             //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//             withCredentials: true
//         });
//         if(response.status===201){
//             sessionStorage.removeItem('name');
//             setUser(null);
//             document.cookie='';

//             router.push('/TourGuide/TG_logIn');
//         }else{
//             console.error('sing-out failed:', response)
//         }
        
        
            
//         }
//         catch(error){
//             console.error('error failed: ', erorr);

//         }
//     }

//     return(
//         <AuthContext.Provider value={{user,login,logout,checkUser}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }
// export const useAuth =()=>useContext(AuthContext);