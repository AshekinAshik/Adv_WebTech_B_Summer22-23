import { useEffect } from "react";
import {useAuth} from "../HLT/loginform";
import { useRouter } from "next/router";


const Logout = () =>{
    const {user,logout} =useAuth();
    const router =useRouter();

    useEffect(()=>{
        checkSession();
    },[]);

    function checkSession()
    {
        if(user!=null)
        {
            console.log("user: "+user.name)
            console.log("user: "+user.cookie)
        }
        else{
            router.push('TG_logIn')
        }
    }

    const handleLogout =()=>{
        logout();
        router.push('TG_logIn');
    }

    return(
        <>
        <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Logout

