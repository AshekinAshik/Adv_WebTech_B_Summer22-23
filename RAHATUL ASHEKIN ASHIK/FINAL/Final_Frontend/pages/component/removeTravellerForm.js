import axios from "axios";
import React, { useState } from 'react';
import Title from "../layout/title";
import SessionCheck from "../utils/sessionCheck";

const RemoveTravellerForm = () => {
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
            const response = await axios.delete(process.env.NEXT_PUBLIC_API_BASE_URL + '/remove/traveller/' + travellerData.travellerId,
                {
                    withCredentials: true
                });

            console.log(response.data);
            alert("Traveller Delete Successful!");
        } catch (error) {
            console.error(error);
            alert("Traveller Delete Failed!");
        }
    };

    return (
        <>
            <SessionCheck />
            <h2 align="center"> Removal Information </h2>

            <div>
                <form onSubmit={handleSubmit}>
                    <center>
                        <table>
                            <tr>
                                <td>Traveller ID:</td>
                                <td><input type="number" name="travellerId" placeholder="whom to remove" onChange={handleChange} required /></td>
                            </tr>
                        </table>

                        <br></br>
                        {/* <input type="submit" name="traveller_remove" value="REMOVE"></input> */}
                        <input type="submit" name="removebutton" value="REMOVE"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default RemoveTravellerForm;