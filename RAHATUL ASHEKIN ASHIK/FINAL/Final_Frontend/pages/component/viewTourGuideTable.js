import axios from "axios";
import React, { useState, useEffect } from 'react';
import Title from "../layout/title";
import SessionCheck from "../utils/sessionCheck";

const ViewTourGuideTable = () => {
    const [tourGuideData, setTourGuideData] = useState([]);

    useEffect(() => {
        getTourGuide();
    }, []);

    const getTourGuide = async () => {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/search/tourguide',
                {
                    withCredentials: true
                });

            setTourGuideData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Error Fetching Tour Guide Data:', error);
        }
    };

    const handleRemove = async (e) => {
        const travellerId = e.target.id;
        console.log(travellerId);

        try {
            const response = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + '/remove/traveller/' + travellerId);
            console.log(response.data);
            alert("Traveller Delete Successful!");
            router.push('/manager/viewTraveller');
        } catch (error) {
            console.error(error);
            alert("Traveller Delete Failed!");
        }
    };

    return (
        <>
            {/* <SessionCheck /> */}
            
            <br></br> <br></br>
            <div>
                <center>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-center text-gray-800 dark:text-gray-400">
                            <thead class="text-extrabold text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Tour Guide ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        E-mail
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Contact Number
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Location
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {tourGuideData.map((item) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                                        <td class="px-6 py-4">{item.id}</td>
                                        <td class="px-6 py-4">{item.name}</td>
                                        <td class="px-6 py-4">{item.username}</td>
                                        <td class="px-6 py-4">{item.email}</td>
                                        <td class="px-6 py-4">{item.contact}</td>
                                        <td class="px-6 py-4">{item.age}</td>
                                        <td class="px-6 py-4">{item.location}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>

                </center>
            </div>
        </>
    )
};

export default ViewTourGuideTable;