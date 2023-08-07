
import Link from "next/link";
import Meta from "../meta";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AddManager = () => {

    const router = useRouter();

    const [user, setUser] = useState({
        fastname:"",
        lastname:"",
        email:"",
        contact:1,
        password:"",
        adminID:1,
    })

    const {fastname,lastname,email,contact,password,adminID} = user;

    const handleChange = async (e) =>{
        setUser ({ ...user, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        user.contact = parseInt(user.contact);
        user.adminID = parseInt(user.adminID);
        console.log(user)


        try {

            const response = await axios.post('http://localhost:3000/admin/register/manager', user, {
        
              headers: {
        
                'Content-Type': 'application/json'
        
              }
        
            });
        
            console.log(response.data);
        
            alert("Manager Add Successful!");
            //router.push('/admin/admin_log');
        
          } catch (error) {
        
            console.error('Error Manager Signing Up:', error);
        
            alert("Admin Registration Failed!");
        
          }
    };


    return(
        <React.Fragment>
            <Meta title="Add Manager" keywords="fahad" description ="Fahad" />
        <form onSubmit={handleSubmit}>

            <label>
                Fast Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="fastname" name="fastname"onChange={handleChange}  value={fastname}/>
            </label><br></br><br></br>

            <label>
                last Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"id="lastname" name="lastname"onChange={handleChange}  value={lastname}/>
            </label><br></br><br></br>

            <label>
                Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="email" name="email" onChange={handleChange} value={email}/>
            </label><br></br><br></br>

            <label>
                Contact &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="contact" name="contact" onChange={handleChange} value={contact} />
            </label><br></br><br></br>

            <label>
                Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="password" name="password" onChange={handleChange} value={password}/>
            </label><br></br><br></br>

            <label>
                Admin ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="adminID" name="adminID" onChange={handleChange} value={adminID}/>
            </label><br></br><br></br>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit">Add</button><br></br><br></br>

        </form>
        <Link href="manager_all_data">Manager List</Link><br></br><br></br><br></br>
        <Link href="/home">Home</Link>
     
        </React.Fragment>
    );
}
export default  AddManager