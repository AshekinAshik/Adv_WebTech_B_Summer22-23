import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import SessionCheck from "../HLT/sessioncheck";
import axios from "axios";
import Link from "next/link";
import Title from "../HLT/title";


const Viewtourpack = ()=>{
const router = useRouter();

const [jsondata, setjsonData] = useState([]);

useEffect(()=>{
    loadalldata();
},[]);

const loadalldata = async() =>{
    try{
        const response = await axios.get(process.env.NEXT_PUBLIC_TG+'/viewalltourpack',{withCredentials:true})
    
        setjsonData(response.data)
        console.log(response.data);
    
    }catch(error){
        console.log('Error Fetching Data:', error);
    }

}

return(
    <div className="bg-slate-600 p-3">
    <h1 className="mt-6 ml-6">All Payment</h1>
    <Title page="All Payment "></Title>
            <SessionCheck/>
            {jsondata != null &&(
                <div>
                    {Array.isArray(jsondata) ? (
                        <div>
                            
                            <p className="mt-6 ml-6"><b>Payment Details</b></p><br></br>
                            <ol>
                                
                                {jsondata.map((item, index) =>(
                                    <li key = {index}>
                                        <center>
                                        {/* <Link className="w-48 ml-6 h-auto bg-slate-500 block text-center mt-6" href={"" + item.id}> Name : {item.name} <p className="text-red-600">More info</p></Link> */}
                                        <b>Tourguide ID Who received payment:{item.tourguideID}</b>
                                        <br></br>
                                        ID:{item.id}<br></br>
                                        Name:{item.name}<br></br>
                                        Start-Destination:{item.startdestination}<br></br>
                                        End-Destination:{item.enddestination}<br></br>
                                        Total-Duration:{item.totalduration}<br></br>
                                        Total-Amount:{item.totalamount}<br></br>
                                        {/* <b>Tourguide ID Who received payment:{item.tourguideID}</b> */}
                                        
                                        <br></br>
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
            <center>
            <Link className='text-white' href="/TourGuide/TG_profile">PROFILE</Link>
            </center>
            



    </div>
)

}

export default Viewtourpack