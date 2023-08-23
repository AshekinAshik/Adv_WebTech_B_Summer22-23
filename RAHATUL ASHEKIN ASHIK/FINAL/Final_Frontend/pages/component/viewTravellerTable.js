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

    // const handleRemove = async (e) => {
    //     const travellerId = e.target.id;
    //     console.log(travellerId);

    //     try {
    //         const response = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + '/remove/traveller/' + travellerId);
    //         console.log(response.data);
    //         alert("Traveller Delete Successful!");
    //         router.push('/manager/viewTraveller');
    //     } catch (error) {
    //         console.error(error);
    //         alert("Traveller Delete Failed!");
    //     }
    // };

    return (
        <>
            <SessionCheck />

            <br></br> <br></br>
            <div>
                <center>
                    <p className="mt-6 ml-6"> All Traveller </p>
                    {/* <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                    </div> */}

                    {travellerData !== null && (
                        <div>
                            {Array.isArray(travellerData) ? (
                                <div>

                                    <p className="mt-6 ml-6" >All Traveller List: </p>
                                    <ol>
                                        {travellerData.map((item, index) => (
                                            <li key={index}>

                                                <Link className="w-48 ml-6 h-auto bg-slate-500 block text-center mt-6" href={"" + item.id}> Name : {item.name} <p className="text-red-600">More info</p></Link>

                                                <br></br>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            ) : (
                                <div>
                                    <p>Response is an object:</p>
                                    <p>{travellerData}</p>
                                </div>
                            )}
                            <Link className=" ml-6 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" href="add_manager">Add More Manager</Link><br></br><br></br>
                        </div>
                    )}

                </center>
            </div>
        </>
    );
};

export default ViewTravellerTable;