import Link from "next/link";
import Meta from "../meta";
import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";


const TravellerReg =  () => {
  const router = useRouter();

  const [user, setUser] = useState({
    fastname: "",
    lastname:"",
    email: "",
    contact:1,
    password: "",
   
  });
  const { fastname, lastname,email,contact, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const handleSubmit =  async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    console.log(user)
    
  
  try {

    const response = await axios.post('http://localhost:3000/traveller/register', user, {

      headers: {

        'Content-Type': 'application/json'

      }

    });

    console.log(response.data);

    alert("Traveller Registration Successful!");
    router.push('/traveller/traveller_log');

  } catch (error) {

    console.error('Error Tourguid Signing Up:', error);

    alert("Traveller Registration Failed!");

  }

};


    return (
      <>
        <Meta title="Traveller Registration" keywords="ashik" description ="Ashik" />
        <center>

        <div className="bg-blue-700 p-10 text-white p-4">

          <h6 className=" font-bold ">
            This is Registration Page
          </h6>


        </div><br></br>
        <div>
        <form onSubmit={handleSubmit}>
                <label>Enter first name&nbsp;&nbsp;&nbsp;
                <input type="text" id="fastname" name="fastname"onChange={handleChange}  value={fastname}/>
                </label><br></br><br></br>

                <label>Enter last name&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="lastname" name="lastname"onChange={handleChange}  value={lastname}/>
                </label><br></br><br></br>

                <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" id="email" name="email"onChange={handleChange}  value={email}/>
                </label><br></br><br></br>

                <label>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" id="contact" name="contact"onChange={handleChange}  value={contact}/>
                </label><br></br><br></br>

                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id="password" name="password"onChange={handleChange}  value={password}/>
                </label><br></br><br></br>


                {/* <label>Image
                <input type="file" name="filename"onChange={handleChange}  value={filename}/>
                </label><br></br><br></br> */}


                <button type="submit"><button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">submit</button></button>
            </form>
        </div>
        
        <p>Already you have a Account! <Link href="traveller_log"><button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log In</button></Link></p>
        <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link>

        </center>

      </>
    );
  }

export default  TravellerReg

