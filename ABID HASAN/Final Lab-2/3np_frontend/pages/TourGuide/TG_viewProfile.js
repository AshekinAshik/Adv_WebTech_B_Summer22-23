import Link from 'next/link'
import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import dynamic from "next/dynamic";

import axios from 'axios';
import Layout from '../HLT/layout';

const Header = dynamic(() => import('../HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('../HLT/title'),{
    ssr:false,
})



const TourGuideProfile =()=>{

    const [jsondata, setjsonData] = useState([]);

    useEffect(()=>{
        loadAllData();
    }, []);




    const loadAllData = async ()=>{
        try{
            const response = await axios.get(process.env.NEXT_PUBLIC_SINGUP_TG+"/tourguideinfoall");
            const jsondata = response.data;
            setjsonData(jsondata);
            console.log(jsondata)
        }catch(error){
            console.log(error);

        }
    }

    return (
        <div>
            {/* <button onClick={loadAllData}></button> */}
            <h1>TourGuide Data</h1>
            {jsondata != null &&(
                <div>
                    {Array.isArray(jsondata) ? (
                        <div>
                            <p>Response is an Array:</p>
                            <p>Traveller Details</p>
                            <ul>
                                {jsondata.map((item, index) =>(
                                    <li key = {index}>
                                        ID:{item.id}<br></br>
                                        Name:{item.name}<br></br>
                                        Email:{item.email}<br></br>
                                        Contact:{item.contact_number}<br></br>
                                        File:{item.filename}<br></br>
                                        <b>Tourguide ID:{item.tourguideID}</b>
                                        <br></br>
                                    </li>
                                ))}
                            </ul>
                            </div>
                    ):(
                    <div>
                        <p>Response is an object:</p>
                        <p>{jsondata}</p>
                    </div>
                    )}
                    </div>
            )}



        </div>
    )
}
export default TourGuideProfile





















// export default function Profile(){

//     const [profileData, setProfileData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(()=>{
//         async function fetchProfileData(){
//             try{
//                 const response = await axios.get('http://localhost:3000/tourguide/tourguideinfo',{
    
//                 name,
//                 email,
//                 contact_number,
//                 password,
//                 filename,
    
//                 });
//                 setProfileData(response.data);
//                 setLoading(false);
    
//             }catch(error){
//                 console.error('Erorr fetching profile:',error);
//                 setLoading(false);
//             }
//         }

//         fetchProfileData();
        
//     }, []);

//     return(
//         <div>
//             <Title page="Information"></Title>
//             <Layout>
//                 {loading ? (
//                     <p>Loading....</p>
//                 ): profileData ? (
//                     <div>
//                         <h2>Profile</h2>
//                         <p>Name:{profileData.name}</p>
//                         <p>Email:{profileData.email}</p>
//                     </div>
//                 ):(
//                     <p>Failed to load profile data</p>
//                 )}
//                 <Link href="TG_delete">Delete Account</Link>
                
            
//             </Layout>


//         </div>
//     )

// }