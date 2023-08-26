import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../layout/layout";
import SessionCheck from "../utils/sessionCheck";

const Travellers = () => {
    const router = useRouter();

    const [travellers, setTravellers] = useState(null);

    const travellerId = router.query.id;

    useEffect(() => {
        getData();
    }, []);

    const handleRemove = async () => {

        try {
            const response = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + '/remove/traveller/' + travellerId);
            console.log(response.data);
            alert("Traveller Delete Successful!");
            router.push('' + travellerId);
        } catch (error) {
            console.error(error);
            alert("Traveller Delete Failed!");
        }
    };

    const getData = async () => {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL + '/search/traveller/' + travellerId,
                {
                    withCredentials: true
                })

            setTravellers(response.data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const showData = () => {
        if (travellers) {
            return (
                <>
                    {/* <SessionCheck /> */}

                    <Layout title="Traveller Data">
                        <div className=" gf mt-8">

                            <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div class="flex justify-end px-4 pt-4">

                                </div>
                                <div class="flex flex-col items-center pb-10">
                                    <Link className="text-black text-left bts" href="../traveller/viewTraveller"> Back</Link>
                                    <h1 className="text-black p-2 text-2xl">Traveller Profile</h1>
                                    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/travel.png" alt="traveller image" />
                                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{travellers.name}</h5>

                                    <div className="cardcss">
                                        <p>ID : {travellers.id}</p>
                                        <p>Email: {travellers.email}</p>
                                        <p>Phone: {travellers.contact}</p>
                                        <p>Admin Add: {travellers.managerID}</p>
                                    </div>
                                    <div class="flex mt-4 space-x-3 md:mt-6">

                                        <Link href="updateTraveller" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>

                                        <button type="button" onClick={handleRemove} class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Layout>
                </>
            )
        } else {
            return (
                <>
                    <Layout title="Traveller Data">
                        <br></br>
                        <p class="text-center text-red-700"> No Traveller Data to Show </p>
                    </Layout>
                </>
            )
        }
    };

    return (
        <div>
            {showData()}
        </div>
    )
};

export default Travellers;