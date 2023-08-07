import Link from "next/link";
import Meta from "../meta";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import router from "next/router";


//https://youtu.be/6QbJppB3oLQ


const  DeleteManeger = ({managerId}) => {

    

    const handleMChange = (e) =>{
        e.target.value
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const respos = await axios.delete('http://localhost:3000/admin/delete/manager/:managerId')
            console.log(respos.data);

        }catch(error){
            console.log(error);
        }
    }


    return(
        <>
        <Meta title="Delete Manager" keywords="fahad" description ="Fahad" />
        <form onSubmit={handleSubmit}>

            {/* <label>
                Admin ID
                <input type="number" id="adminID" name="adminID" onChange={handleAChange} value={adminID}/>
            </label><br></br><br></br> */}

            <label>
                Manager ID
                <input type="number" id="id" name="managerId" onChange={handleMChange} value={managerId}/>
            </label><br></br><br></br>

            <button type="submit">Delete</button><br></br><br></br>

        </form>
        <Link href="manager_all_data">Manager List</Link><br></br><br></br>
        <Link href="/home">Home</Link>
      
        </>

    );
}

export default   DeleteManeger