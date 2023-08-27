import Link from "next/link";
import Meta from "../meta";
import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";


const TravellerReg =  () => {
  const router = useRouter();
  const [error, setError] = useState('');
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

  const isValidFastName = (fastname) => {
    return fastname.length >= 2;
  }
  const isValidLastName = (lastname) => {
    return lastname.length >= 4;
  }
  const isValidLastNameM = (lastname) => {
    const machName = /^[a-zA-Z]+[a-zA-Z]+$/;
    return machName.test(lastname)
  }

  
  const handleSubmit =  async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    console.log(user)

    if (!email || !password || !fastname || !lastname || !contact) {
      setError('All Field required');
    }else if (!isValidFastName(fastname)){
      setError("Fast Name must be 2 bit")
    }
    else if (!isValidLastName(lastname) ){
      setError(" Name must be 3 bit")
    }
    else if (!isValidLastNameM(lastname) ){
      setError("Last Name not suppourt Number")
    }
     else {
      const res = await doSignUp(user)
      console.log(res);
    }
  }
  const doSignUp = async (e) => {
    
  
  try {

    const response = await axios.post('http://localhost:3000/traveller/register', user, {

      headers: {

        'Content-Type': 'application/json',

      },

      withCredentials: true

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

                
                {error && <p className="text-red-700 absolute mt-3 left-0 right-0  mr-auto ">{error}</p>}

                <button type="submit"><button type="button" class=" mt-10 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">submit</button></button>
            </form>
        </div>
        
        <p>Already you have a Account! <Link href="traveller_log"><button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log In</button></Link></p>
        <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link>

        </center>

      </>
    );
  }

export default  TravellerReg

