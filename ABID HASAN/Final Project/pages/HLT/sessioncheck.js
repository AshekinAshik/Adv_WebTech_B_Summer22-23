import { useRouter } from "next/router";
import { useEffect } from "react";

export default function SessionCheck(){
    const router = useRouter();

    useEffect(()=>{
        const session = sessionStorage.getItem('name');
        if(!session){
            router.push('../TourGuide/TG_logIn');
        }
    },[]);
    
    return null;
}