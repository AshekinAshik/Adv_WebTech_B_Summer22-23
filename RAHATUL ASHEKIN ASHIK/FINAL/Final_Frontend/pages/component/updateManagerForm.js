import axios from "axios";
import Link from "next/link";
import React, { useState } from 'react';
import SessionCheck from "../utils/sessionCheck";

const UpdateManagerForm = () => {
    const [updateManagerForm, setUpdateManagerFormData] = useState({
        name: "",
        email: "",
        contact: 0,
        password: "",
    });

    const handleChange = (e) => {
        setUpdateManagerFormData({ ...updateManagerForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        updateManagerForm.contact = parseInt(updateManagerForm.contact);
        console.log(updateManagerForm);

        try {
            const response = await axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + '/updateinfo', updateManagerForm,
                {
                    withCredentials: true
                });

            console.log(response.data);
            alert("Manager Update Successful!");
        } catch (error) {
            console.error('Error Manager Update:', error);
            alert("Manager Update Failed!");
        }
    };

    return (
        <>
            <SessionCheck />

            <br></br> <br></br>
            <div class="flex flex-wrap justify-center">
                <div>
                    <h3 class="text-center mb-4 text-3xl font-bold text-black"> Update Information - Manager </h3>
                    <form class="mt-4" onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-black">Name</label>
                            <input type="text" id="name" name="name" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-black">Email address</label>
                            <input type="email" id="email" name="email" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-6">
                            <label for="contact" class="block mb-2 text-sm font-medium text-black">Contact number</label>
                            <input type="tel" id="contact" name="contact" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-black">Password</label>
                            <input type="password" id="password" name="password" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>

                        <center>
                            <button type="submit" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">UPDATE</button>
                        </center>
                    </form>
                </div>
            </div>
        </>
    )
};

export default UpdateManagerForm;