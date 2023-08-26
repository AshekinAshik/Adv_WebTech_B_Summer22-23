import axios from "axios";
import React, { useState } from 'react';
import Title from "../HLT/title";
import SessionCheck from "../HLT/sessioncheck";
import Layout from "../HLT/layout";
import { useRouter } from "next/router";
import Link from "next/link";

const RemoveTraveller = () => {
    const router = useRouter('');
    const [travellerData, setTravellerData] = useState({
        travellerId: 0,
    });

    const handleChange = (e) => {
        setTravellerData({ ...travellerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        travellerData.travellerId = parseInt(travellerData.travellerId);
        console.log(travellerData);

        try {
            const response = await axios.delete(process.env.NEXT_PUBLIC_TG + '/removetraveller/' + travellerData.travellerId,
                {
                    withCredentials: true
                });

            console.log(response.data);
            alert("Traveller Delete Successful!");
            router.push('/TourGuide/TG_profile')
        } catch (error) {
            console.error(error);
            alert("Traveller Delete Failed!");
        }
    };

    return (
        <div className="bg-slate-600 p-60">
            <SessionCheck />
            <Title page="Remove Traveller"></Title>
            {/* <Layout title="Remove Traveller"/> */}
            <h1 className="text-center text-white "> <b>REMOVE TRAVELLER </b></h1><br></br>
            <p className="text-center"><b>NOTE: The Traveller Will Be Parmanently Deleted </b></p>
            <p className="text-center"><b>Please Enter Which Traveller Youn Wnat To Delete!</b> </p><br></br>


            <div>
                <center>
                <form onSubmit={handleSubmit}>
                <lable className="texts"> Traveller ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="name" name="travellerId" onChange={handleChange} ></input>
                </lable>
                <br></br>
                <br></br>

                <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Remove</button>
                </form>
                <Link className="text-purple-500" href="/TourGuide/TG_profile">Profile</Link>
                </center>

            </div>
        </div>
    )
};

export default RemoveTraveller;