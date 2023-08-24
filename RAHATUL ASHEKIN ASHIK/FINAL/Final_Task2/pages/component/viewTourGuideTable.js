import axios from "axios";
import React, {useState, useEffect} from 'react';

const ViewTourGuideTable = () => {
    const [managerData, setManagerData] = useState ([]);

        const getManager = async () => {
            try {
                const response = await axios.get('http://localhost:3000/manager/gettourguides');
                setManagerData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        getManager();

    return (
        <>
            <h2 align="center"> Tour Guide Details </h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table border="1">
                    <tr> 
                        <th> Name </th>
                        <th> Username </th>
                        <th> E-Mail </th>
                        <th> Contact </th>
                        <th> Age </th>
                        <th> Location </th>
                    </tr>
                    <tr align="center">
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                    </tr>
                    </table>
                    </center>
                </form>
            </div>
        </>
    )
}; 

export default ViewTourGuideTable;