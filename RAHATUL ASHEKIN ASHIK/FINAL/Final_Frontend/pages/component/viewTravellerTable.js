import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import Title from "../layout/title";
import SessionCheck from "../utils/sessionCheck";

const ViewTravellerTable = () => {
    const router = useRouter();

    const [travellerData, setTravellerData] = useState([]);

    useEffect(() => {
        getTraveller();
    }, []);

    const getTraveller = async () => {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/search/traveller',
                {
                    withCredentials: true
                });

            setTravellerData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Error Fetching Traveller Data:', error);
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
            <SessionCheck />

            <br></br> <br></br>
            <div>
                <center>
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-center text-gray-800 dark:text-gray-400">
                            <thead class="text-extrabold text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Traveller ID
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
                                        Contact
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Age
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Gender
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Profession
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Associate Manager ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Assigned Tour Guide ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {travellerData.map((item) => (
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
                                        <td class="px-6 py-4">{item.id}</td>
                                        <td class="px-6 py-4">{item.name}</td>
                                        <td class="px-6 py-4">{item.username}</td>
                                        <td class="px-6 py-4">{item.email}</td>
                                        <td class="px-6 py-4">{item.contact}</td>
                                        <td class="px-6 py-4">{item.age}</td>
                                        <td class="px-6 py-4">{item.gender}</td>
                                        <td class="px-6 py-4">{item.profession}</td>
                                        <td class="px-6 py-4">{item.managerID}</td>
                                        <td class="px-6 py-4">{item.tourGuideId}</td>
                                        <td class="px-6 py-4 text-right">
                                            <button type="button" onClick={handleRemove} id={item.id} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </center>
            </div>
        </>
    );
};

export default ViewTravellerTable;