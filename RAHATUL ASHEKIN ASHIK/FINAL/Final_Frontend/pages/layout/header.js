import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useAuth } from "../utils/authContext";
import { useEffect, useState } from "react";
import axios from "axios";

const MyHeader = () => {
    const router = useRouter();
    const [username, setUsername] = useState(null);

    async function Logout() {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/logout',
                null,
                {
                    withCredentials: true, // Send cookies along with the request
                }
            );

            if (response.status === 201) {
                sessionStorage.removeItem('username');
                setUsername(null);
                document.cookie = ''; // Clear cookies
                router.push('../manager/login');
            } else {
                console.error('Sign-out failed:', response);
            }
        } catch (error) {
            console.error('Sign-out error:', error);
        }
    }

    return (
        <>
            <nav class="bg-green-400 p-2 fixed w-full z-20 top-0 left-0 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/manager" class="flex items-center">
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
                            <li>
                                <a href="/manager/home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
                            </li>

                            {/* For Manager */}
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarManager" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> Manager <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbarManager" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div class="py-1">
                                        <a href="/manager/updateManager" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Update</a>
                                    </div>
                                    <div>
                                        <a href="/manager/sendMail" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Send Mail</a>
                                    </div>
                                </div>
                            </li>

                            {/* For Traveller */}
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarTraveller" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> Traveller <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbarTraveller" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div>
                                        <a href="../traveller/addTraveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Add Traveller</a>
                                    </div>
                                    <div>
                                        <a href="../traveller/viewTraveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">View Traveller</a>
                                    </div>
                                    <div>
                                        <a href="../traveller/updateTraveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Update Traveller</a>
                                    </div>
                                    <div>
                                        <a href="../traveller/removeTraveller" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Remove Traveller</a>
                                    </div>
                                </div>
                            </li>

                            {/* For Tour Guide */}
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbarTourGuide" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"> Tour Guide <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbarTourGuide" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <div>
                                        <a href="../tourguide/addTourGuide" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Add Tour Guide</a>
                                    </div>
                                    <div>
                                        <a href="../tourguide/viewTourGuide" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">View Tour Guide</a>
                                    </div>
                                    <div>
                                        <a href="../tourguide/assignTourGuide" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Assign Tour Guide</a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="/manager/addHotels" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hotels</a>
                            </li>

                            <li>
                                <button onClick={Logout} class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"> Sign Out </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
        </>
    )
};

export default MyHeader;