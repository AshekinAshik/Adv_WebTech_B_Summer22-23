import Link from "next/link";
import Meta from "../meta";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import SessionCheck from "../Component/session";


const UpdateTraveller = () => {


  const router = useRouter();

  const [user, setUser] = useState({
    fastname: "",
    lastname:"",
    email: "",
    contact:1,
    password: "",
    
  });
  const {  fastname, lastname,email,contact, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    // user.id = parseInt(user.id);
    console.log(user)
    
  
  try {

    const response = await axios.put('http://localhost:3000/traveller/updatetravellerinfo', user, {withCredentials: true}, {

      headers: {

        'Content-Type': 'application/json'
        

      }, 

        

      
      

    });

    console.log(response.data);

    alert("Traveller Update Successful!");
    //router.push('/traveller/traveller_log');

  } catch (error) {

    console.error('Error Traveller Signing Up:', error);

    alert("Traveller Update Failed!");

  }

};




    return(
      
        <React.Fragment>
          <SessionCheck/>
          
           <Meta title="Update Traveller Info" keywords="Ashik" description ="Ashik" />
           <center>
           <SessionCheck/>
           <div className="bg-blue-700 p-10 text-white p-4">

<h6 className=" font-bold ">
  Update Traveller Info
</h6>


</div><br></br>
                <form onSubmit={handleSubmit}>


                {/* <label>ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="id" name="id"onChange={handleChange}  value={id} />
                </label><br></br><br></br> */}

                <label>Enter first name&nbsp;&nbsp;&nbsp;
                <input type="text" id="fastname" name="fastname"onChange={handleChange}  value={fastname} />
                </label><br></br><br></br>

                <label>Enter last name&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"id="lastname" name="lastname"onChange={handleChange}  value={lastname} />
                </label><br></br><br></br>

                <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email"id="email" name="email"onChange={handleChange}  value={email} />
                </label><br></br><br></br>

                <label>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="contact" name="contact"onChange={handleChange}  value={contact}/>
                </label><br></br><br></br>

                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text"id="password" name="password"onChange={handleChange}  value={password} />
                </label><br></br><br></br>

                


               <button type="submit"><button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update</button></button>
            </form>
                <Link href="traveller_profile"><button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Traveller Profile</button></Link><br></br><br></br>
                <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link>
           </center>
    
        </React.Fragment>
    );
}
export default  UpdateTraveller
