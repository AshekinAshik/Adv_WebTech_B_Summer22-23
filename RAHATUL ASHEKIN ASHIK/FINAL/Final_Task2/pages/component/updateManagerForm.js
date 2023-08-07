import axios from "axios";
import { Router, useRouter } from "next/router";
import React, { useState } from 'react';

const UpdateManagerForm = () => {
    const [updateManagerForm, setUpdateManagerFormData] = useState({
        name: "",
        email: "",
        contact: 0,
        password: "",
    });

    const handleChange = (e) => {
        setUpdateManagerFormData({ ...updateManagerForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        updateManagerForm.contact = parseInt(updateManagerForm.contact);
        console.log(updateManagerForm);

        try {
            const response = await axios.put('http://localhost:3000/manager/updateinfo', updateManagerForm);
            console.log(response.data);
            alert("Manager Update Successful!");
        } catch (error) {
            console.error('Error Manager Update:', error);
            alert("Manager Update Failed!");
        }
    };

    return (
        <>
            <h2 align="center"> Update Information </h2>
            <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                        <table>
                            <tr>
                                <td>NAME:</td>
                                <td><input type="text" name="name" placeholder="your name" onChange={handleChange} required /></td>
                            </tr>
                            <br></br>
                            <tr>
                                <td>E-MAIL:</td>
                                <td><input type="email" name="email" placeholder="your email" onChange={handleChange} required /></td>
                            </tr>
                            <br></br>
                            <tr>
                                <td>CONTACT:</td>
                                <td><input type="number" name="contact" placeholder="your contact number" onChange={handleChange} required /></td>
                            </tr>
                            <br></br>
                            <tr>
                                <td>PASSWORD:</td>
                                <td><input type="text" name="password" placeholder="your password" onChange={handleChange} required /></td>
                            </tr>
                        </table>
                    </center>

                    <center>
                        <br></br>
                        <input type="submit" name="manager_update_submit" value="UPDATE"></input>
                    </center>
                </form>
            </div>
        </>
    )
};

export default UpdateManagerForm;