// import React from "react"
// import Meta from "../meta";
// import axios from "axios";

// const ContactForm = () => {
//    return (
//       <React.Fragment>
//          <Meta title="Contact Page" keywords="fahad" description="Fahad" />

//          <div className="flex justify-center">
//             <form action="#" class="mb-6 h-3/6 w-1/3 text-center">
//                <div class="mb-6 mt-28">
//                   <label for="email" class="block mb-2 text-white text-sm font-medium dark:text-white">Your email</label>
//                   <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
//                </div>
//                <div class="mb-6">
//                   <label for="subject" class="block mb-2 text-sm font-medium text-white dark:text-white">Subject</label>
//                   <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
//                </div>
//                <div class="mb-6">
//                   <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
//                   <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
//                </div>
//                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
//             </form>
//          </div>


//       </React.Fragment>
//    )
// }

// export default ContactForm;


import React, { useState } from 'react';

import axios from 'axios';

import SessionCheck from './session';



const SendMailForm = () => {

   const [mail, setMail] = useState({

      receiver: "",

      subject: "",

      message: "",

   });


   const handleChange = (e) => {

      setMail({ ...mail, [e.target.name]: e.target.value });

   };



   const handleSubmit = async (e) => {

      e.preventDefault();

      console.log(mail);



      try {

         const response = await axios.post('http://localhost:3000/traveller/sent/tourguid', mail, {

            headers: {

               'Content-Type': 'application/json'

            },

            withCredentials: true

         });



         console.log(response.data);

         alert("Mail Sent Manager");

      } catch (error) {

         console.error('Error Traveller Mail:', error);

         alert("Mail Sent to Traveller Failed!");

      }

   };



   return (

      <>

         <SessionCheck />
         <div class="flex flex-wrap justify-center">

            <div class="pl-4 pr-4 formcssmail11">



               <h3 class="text-center mb-2 text-2xl mt-8 font-bold text-white">Mail </h3>

               <form class="mt-4" onSubmit={handleSubmit}>

                  <div class="mb-6">

                     <label for="receiver" class="block text-start mb-2 text-sm font-medium text-white">To</label>

                     <input type="text" placeholder='Enter sent mail' id="receiver" name="receiver" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />

                  </div>

                  <div class="mb-6">

                     <label for="subject" class="block text-start mb-2 text-sm font-medium text-white">Subject</label>

                     <input type="text" id="subject" placeholder='Wite your Subject' name="subject" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />

                  </div>

                  <div class="mb-6">

                     <label for="message" class="block text-start mb-2 text-sm font-medium text-white">Message</label>

                     <textarea rows="4"  id="message" placeholder='Wite your Message' name="message" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />

                  </div>



                  <center>

                     <button type="submit" name="send_mail" class="text-white bts bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SEND</button>

                  </center>

               </form>

            </div>

         </div>

      </>

   )

};



export default SendMailForm;
