import axios from 'axios';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Title from '../layout/title';
import SessionCheck from '../utils/sessionCheck';

const AddTravellerForm = () => {
    const [travellerData, setTravellerData] = useState({
        name: "",
        username: "",
        email: "",
        contact: 0,
        age: 0,
        gender: "",
        profession: "",
    });

    const handleChange = (e) => {
        setTravellerData({ ...travellerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        travellerData.contact = parseInt(travellerData.contact);
        travellerData.age = parseInt(travellerData.age);
        console.log(travellerData);

        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL + '/register/traveller', travellerData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response.data);
            alert("Traveller Registration Successful!");
        } catch (error) {
            console.error('Error Traveller Registration:', error);
            alert("Traveller Registration Failed!");
        }
    };

    return (
        <>
            {/* <SessionCheck /> */}

            <br></br> <br></br>
            <div class="flex flex-wrap justify-center z-1 relative">
                <div>
                    <h3 class="text-center mb-4 text-3xl font-bold text-black"> Traveller Information </h3>
                    <form class="mt-4" onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm font-medium text-black">Name</label>
                            <input type="text" id="name" name="name" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-6">
                            <label for="username" class="block mb-2 text-sm font-medium text-black">Username</label>
                            <input type="text" id="username" name="username" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
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
                            <label for="age" class="block mb-2 text-sm font-medium text-black">Age</label>
                            <input type="number" id="age" name="age" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-6">
                            <label for="gender" class="block mb-2 text-sm font-medium text-black">Gender</label>
                            {/* <input type="text" id="gender" name="gender" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required /> */}
                            <div>
                                <input type="radio" id="gender" name="gender" value="Male" onChange={handleChange} /> Male
                                <input type="radio" id="gender" name="gender" value="Female" onChange={handleChange} /> Female
                                <input type="radio" id="gender" name="gender" value="Other" onChange={handleChange} /> Other
                            </div>
                        </div>
                        <div class="mb-6">
                            <label for="profession" class="block mb-2 text-sm font-medium text-black">Profession</label>
                            <input type="text" id="profession" name="profession" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>

                        <center>
                            <button type="submit" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">REGISTER</button>
                        </center>

                        <center>
                            <br></br><br></br>
                        </center>
                    </form>
                </div>
            </div>
        </>
    )
};

export default AddTravellerForm;