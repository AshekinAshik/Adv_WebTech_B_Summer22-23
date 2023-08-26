import React from "react"
import Meta from "../meta";
import axios from "axios";

const ContactForm = () => {
   return (
      <React.Fragment>
         <Meta title="Contact Page" keywords="ashik" description="Ashik" />

         <div className="flex justify-center mt-16">
            <form action="#" class="mb-6 h-3/6 w-1/3 text-center">
               <div class="mb-6">
                  <label for="email" class="block mb-2 text-white text-sm font-medium dark:text-white">Your Email</label>
                  <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
               </div>
               <div class="mb-6">
                  <label for="subject" class="block mb-2 text-sm font-medium text-white dark:text-white">Subject</label>
                  <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required />
               </div>
               <div class="mb-6">
                  <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
                  <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
               </div>
               <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
            </form>
         </div>


      </React.Fragment>
   )
}

export default ContactForm;
