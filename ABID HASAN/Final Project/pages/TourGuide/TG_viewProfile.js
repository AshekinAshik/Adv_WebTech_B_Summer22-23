import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";
import axios from 'axios';

import SessionCheck from '../HLT/sessioncheck';

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
            const response = await axios.get(process.env.NEXT_PUBLIC_TG+'/search/traveller',{withCredentials:true});
            //const jsondata = response.data;
            setjsonData(response.data);
            console.log(response.data)
            
        }catch(error){
            console.log('Error Fetching Data:',error);

        }
    }

    return (
        <div className='bg-slate-600 p-3'>
            {/* <button onClick={loadAllData}></button> */}
            <h1 className=" mt-6 ml-6">All Traveller</h1>
            <SessionCheck/>
            {jsondata != null &&(
                <div>
                    {Array.isArray(jsondata) ? (
                        <div>
                            
                            <p className="mt-6 ml-6"><b>Traveller Details</b></p><br></br>
                            <ol>
                                
                                {jsondata.map((item, index) =>(
                                    <li key = {index}>
                                        <center>
                                        {/* <Link className="w-48 ml-6 h-auto bg-slate-500 block text-center mt-6" href={"" + item.id}> Name : {item.name} <p className="text-red-600">More info</p></Link> */}
                                        ID:{item.id}<br></br>
                                        Name:{item.name}<br></br>
                                        UserName:{item.username}<br></br>
                                        Email:{item.email}<br></br>
                                        Contact:{item.contact_number}<br></br>
                                        Age:{item.age}<br></br>
                                        Gender:{item.gender}<br></br>
                                        Profession:{item.profession}<br></br>
                                        <b>Tourguide ID Who Add traveller:{item.tourguideID}</b>
                                        <br></br><br></br>
                                        </center>
                                    </li>
                                ))}
                            </ol>
                            </div>
                    ):(
                    <div>
                        <p>Response is an object:</p>
                        <p>{jsondata}</p>
                    </div>
                    )}
                    </div>
            )}


            <Link className='text-white' href="/TourGuide/TG_profile">PROFILE</Link>
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