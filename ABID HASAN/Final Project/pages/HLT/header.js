import Layout from "./layout"
import Image from "next/image"
import Head from "next/head"
import React, { useState } from "react"
import Link from "next/link"
import SessionCheck from "./sessioncheck"
import { useRouter } from "next/router"
import axios from "axios"



const Header=()=>{

    const router = useRouter();
    const [name, setName]= useState('');

    async function Logout(){
        try{
            const response = await axios.post(process.env.NEXT_PUBLIC_TG + '/logout',
                null,
                {
                    withCredentials: true, // Send cookies along with the request
                }
            );

            if (response.status === 201) {
                sessionStorage.removeItem('name');
                setName(null);
                document.cookie = ''; // Clear cookies
                router.push('/TourGuide/TG_logIn');
            } else {
                console.error('Log-out failed:', response);
            }

        }catch (error) {
            console.error('Sign-out error:', error);
        }
    }
    
    
    return(
        <>
        <nav class="bg-red-400 p-2 fixed w-full z-20 top-0 left-0 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/tourguide" class="flex items-center">
                        <span class="text-white self-center text-3xl font-bold whitespace-nowrap dark:text-white">Trip Connect</span>
                    </Link>

                    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-2 ">
                            {/* <li>
                                <a href="/manager/home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                            </li> */}

                            {/* Toruguide*/}
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarManager" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> TOURGUIDE <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbarManager" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div class="py-1">
                                        <a href="/TourGuide/TG_viewProfile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Profile</a>
                                    </div>
                                    <div class="py-1">
                                        <a href="/TourGuide/TG_update" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Update</a>
                                    </div>
                                    <div>
                                        <a href="/TourGuide/TG_mailer" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Send Mail</a>
                                    </div>
                                    <div>
                                        <a href="/TourGuide/TG_delete" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Delete Account</a>
                                    </div>
                                </div>
                            </li>

                            {/* For Traveller */}
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarTraveller" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> TRAVELLER <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbarTraveller" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div>
                                        <a href="/Traveller/TG_addtraveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Add Traveller</a>
                                    </div>
                                    {/* <div>
                                        <a href="../traveller/viewTraveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">View Traveller</a>
                                    </div>
                                    <div>
                                        <a href="../traveller/updateTraveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Update Traveller</a>
                                    </div> */}
                                    <div>
                                        <a href="/Traveller/TG_remove_traveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Remove Traveller</a>
                                    </div>
                                </div>
                            </li>

                            {/* For package */}
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarPackage" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> PACKAGES <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbarPackage" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div>
                                        <a href="/Package/hotel_and_vehicle" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Add Hotel and Vehicle</a>
                                    </div>
                                    <div>
                                        <a href="/Package/tourpackage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Add Tour Pack</a>
                                    </div>
                                    <div>
                                        <a href="/Package/view_all_tourpack" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Show Current Tourpack</a>
                                    </div>
                                </div>
                            </li>

                            {/* For payment*/ }
                            <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarPayment" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> PAYMENT <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbarPayment" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div>
                                        <a href="/Payment/receive_payment" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Receive Payment</a>
                                    </div>
                                    <div>
                                        <a href="/Payment/view_all_payment" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">View Payment</a>
                                    </div>
                                    {/* <div>
                                        <a href="/Package/show_all_tourpackage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Show Current Tourpack</a>
                                    </div> */}
                                </div>
                            </li>
                            

                            <li>
                                <button onClick={Logout} class="text-blue-500 hover:text-blue-700 border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-1 text-center dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-white dark:focus:ring-white-800"> Sign Out </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
        </>

        // <React.Fragment>
        //     <Head>
        //         <title>{props.title}</title>
        //     </Head>
        //     <Link href=""><h1 align="center">TRIP CONNECT</h1> </Link>
        //      <center>
                
        //         <Link href ="/about">ABOUT |</Link>
        //         <Link href="/TourGuide/TG_viewProfile">PROFILE |</Link>
        //         <Link href ="/Traveller/TG_addtraveller">TRE-REG |</Link>
        //         <Link href ="/Traveller/TG_remove_traveller">TRE-REMOVE |</Link>
        //         <Link href="/TourGuide/TG_update"> UPDATE TG INFORMATION |</Link>
        //         <Link href="/TourGuide/TG_delete"> DELETE TG |</Link>
        //         <Link href="/Payment/receive_payment"> PAYMENT |</Link>
        //         <Link href="/Package/tourpackage"> TOUR-PACK |</Link>
        //         <Link href="/Package/hotel_and_vehicle"> HOTEL-VEHICLE |</Link>
        //         <Link href="/Traveller/traveller_list"> Traveller All |</Link>
        //         <Link href="/HLT/loginform"> LOGOUT</Link>

        //         <Link href="/TourGuide/TG_mailer"> E-MAIL</Link>
        //         {/* <Link href="/Traveller/[id]">All Info</Link> */}
        //      {/* <Link href ="#">Contact</Link> */}



        //     </center>
           

        // </React.Fragment>
        
        
    );
}

export default Header