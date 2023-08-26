import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import Title from "../layout/title";
import SessionCheck from "../utils/sessionCheck";

const ManagerProfileForm = () => {
    const [managerData, setManagerData] = useState([]);

    useEffect(() => {
        getManager();
    }, []);

    const getManager = async () => {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/profile',
                {
                    withCredentials: true
                });

            setManagerData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Error Fetching Manager Data:', error);
        }
    };

    return (
        <>
            <br></br> <br></br>
            <div>
                <center>

                    <div class="w-80 bg-green-100 border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                        <br></br>

                        <div class="flex flex-col items-center pb-10">
                            <img class="w-26 h-32 mb-3 rounded-full shadow-xl" src="/travel.png" alt="Manager Image" />
                            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{managerData.name}</h5>
                            <center>
                                <p>@{managerData.username} </p>
                            </center>

                            <div class="flex mt-4 space-x-3 md:mt-6">
                                <center>
                                    <p>Email : {managerData.email} </p>
                                    <p>Contact : {managerData.contact} </p>
                                </center>
                            </div>

                            <div class="flex mt-4 space-x-3 md:mt-6">
                                <a href="../manager/updateManager" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Manager</a>
                            </div>
                        </div>
                    </div>

                </center>
            </div>
        </>
    );
};

export default ManagerProfileForm;