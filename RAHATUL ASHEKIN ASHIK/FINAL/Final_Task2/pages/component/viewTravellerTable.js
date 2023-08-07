import axios from "axios";
import React, { useState, useEffect } from 'react';

const ViewTravellerTable = () => {
    const [travellerData, setTravellerData] = useState([]);

    useEffect(() => {
        getTraveller();
    }, []);

    const getTraveller = async () => {
        try {
            const response = await axios.get('http://localhost:3000/manager/search/traveller');
            setTravellerData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log('Error Fetching Traveller Data:', error);
        }
    };

    // const getTraveller = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:3000/manager/search/traveller');
    //         const jsonData = JSON.stringify(response);
    //         setTravellerData(jsonData);
    //         console.log(jsonData);
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <>
            <div>
                <center>
                    <h3>Traveller Data Display</h3>
                    <br></br>
                    {travellerData.length > 0 ? (
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Profession</th>
                                    <th>Manager ID</th>
                                    <th>Tour Guide ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {travellerData.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.profession}</td>
                                        <td>{item.managerID}</td>
                                        <td>{item.tourGuideId}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    ) : (
                        <p> No Traveller Registered Under This ManagerID </p>
                    )}

                    <br></br><br></br>
                    <div>
                        <button onClick={getTraveller}> Refresh Data </button>
                    </div>
                </center>

                {/* <h3>Traveller Data</h3> */}
                {/* {travellerData !== null && (
                    <div>
                        {Array.isArray(travellerData) ? (
                            <div>
                                <p>Response is an array:</p>
                                <ul>
                                    {travellerData.map((item, index) => (
                                        <li key={index}>
                                            ID :{item.id}<br></br>
                                            Name : {item.name} <br></br>
                                            Username :{item.username}<br></br>
                                            Email : {item.email}<br></br>
                                            Phone : {item.contact}<br></br>
                                            <b>Manager Info ID : {item.managerID} <br></br> </b>
                                            <br></br>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <p>Response is an object:</p>
                                <p>{travellerData}</p>
                            </div>
                        )}
                    </div>
                )} */}
            </div>
        </>
    );
};

export default ViewTravellerTable;