import React, {useState} from 'react';
import axios from 'axios';
import SessionCheck from '../HLT/sessioncheck';
import Link from 'next/link';
import MyFooter from '../HLT/footer';
const SendMail =()=>{
    const [sendemail, setSendEmail] = useState({
        receiver:"",
        subject:"",
        message:"",

    });

    const handleChange =(e)=>{
        setSendEmail({ ...sendemail, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(sendemail);
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_TG + '/sendmail', sendemail, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            console.log(response.data);
            alert("Mail Sent to Traveller!");
        } catch (error) {
            console.error('Error Traveller Mail:', error);
            alert("Mail Sent to Traveller Failed!");
        }
    
        
    }

    return (
        <div className="bg-slate-600" >
            <SessionCheck />

            <br></br> <br></br>
            <div class="flex flex-wrap justify-center">
                <div class="w-80">

                    <h3 class="text-center mb-4 text-3xl font-bold text-black">Mail Details</h3>
                    <form class="mt-4" onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <label for="receiver" class="block mb-2 text-sm font-medium text-black">To</label>
                            <input type="text" id="receiver" name="receiver" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                        <div class="mb-6">
                            <label for="subject" class="block mb-2 text-sm font-medium text-black">Subject</label>
                            <input type="text" id="subject" name="subject" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block mb-2 text-sm font-medium text-black">Message</label>
                            <input type="text" id="message" name="message" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>

                        <center>
                            <button type="submit" name="send_mail" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND</button>
                            <br></br><br></br>
                            <Link class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href="/TourGuide/TG_profile">Profile</Link>
                        </center>
                        <center>
                            <br></br><br></br>
                            <MyFooter/>
                        </center>
                        
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default SendMail