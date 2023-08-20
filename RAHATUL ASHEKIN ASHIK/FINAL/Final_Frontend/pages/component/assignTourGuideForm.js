import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import SessionCheck from '../utils/sessionCheck';

const AssignTourGuideForm = () => {
    const [assigningData, setAssigningData] = useState({
        id: 0,
        tourGuideId: 0,
    });

    const handleChange = (e) => {
        setAssigningData({ ...assigningData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(assigningData);

        try {
            const response = await axios.put(process.env.NEXT_PUBLIC_API_BASE_URL + '/assigntourguide/?id=' + assigningData.id + '&tourGuideId=' + assigningData.tourGuideId);

            console.log(response);
            alert("Tour Guide Assign Successful!");
        } catch (error) {
            console.error('Error Tour Guide Assign:', error);
            alert("Tour Guide Assign Failed!");
        }
    };

    return (
        <>
            <SessionCheck />

            <br></br> <br></br>
            <div class="flex flex-wrap justify-center">
                <div class="w-80">
                    <h3 class="text-center mb-4 text-3xl font-bold text-black">Assigning Detail</h3>
                    <form class="mt-4" onSubmit={handleSubmit}>
                        <div class="mb-6">
                            <label for="id" class="block mb-2 text-sm font-medium text-black">Traveller ID</label>
                            <input type="number" id="id" name="id" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div class="mb-6">
                            <label for="tourGuideId" class="block mb-2 text-sm font-medium text-black">Tour Guide ID</label>
                            <input type="number" id="tourGuideId" name="tourGuideId" onChange={handleChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>

                        <center>
                            <button type="submit" class="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Assign</button>
                        </center>
                    </form>
                </div>
            </div>
        </>
    )
};

export default AssignTourGuideForm;