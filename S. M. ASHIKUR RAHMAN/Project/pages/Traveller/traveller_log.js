import Link from "next/link";
import Meta from "../meta";
import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SessionCheck from "../Component/session";
import { useEffect } from "react";

const TravellerLogIn = () => {

  const [error, setError] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();


  useEffect(() => {
    if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
    {
      const session = sessionStorage.getItem('email');
      if (session) {
        setEmail(sessionStorage.getItem('email'));
        router.push('/Traveller/traveller_profile');
      }
    }

  }, []);


  const handleEChange = (e)=>{
    setEmail(e.target.value);
  }

  const handlePChange = (e)=>{
    setPassword(e.target.value);
  }

  const isValidEmail = (email) => {
    const emailPattern = /^\S+@\S+\.\S+$/;
    return emailPattern.test(email);
  };

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!email || !password) {
      setError('Email and password are required');
    } else if (!isValidEmail(email)) {
      setError('Invalid email address');
    } else {
      const res = await doSignIn(email, password)
      console.log(res);

    }
  }
  const doSignIn = async (event) => {


    try {
      const response = await axios.post('http://localhost:3000/traveller/login', { email, password }, {

        withCredentials: true

      });
      sessionStorage.setItem('email', response.data);
      sessionStorage.getItem(document.cookie)
      console.log(document.cookie);
      alert("Log in Successful")
      router.push('/Traveller/traveller_profile');
      window.location.reload();

    } catch (error) {
      console.log(error)
      alert("Not Mach Data")
    }
  }



    return (
      <div> 
        <Meta title="Log In Page" keywords="Ashik" description ="Ashik" />
       <center>
       <SessionCheck />
       <div className="bg-blue-700 p-10 text-white p-4">

<h6 className=" font-bold ">
  This is Traveller Login Page
</h6>


</div><br></br>
          <div>
            <form onSubmit={handleSubmit}>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="email"  name="email" value={email} onChange={handleEChange} />
            </label><br></br><br></br>

            <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  name="password"  value={password} onChange={handlePChange}/>
            </label><br></br><br></br>


           <button type="submite" ><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log In</button></button>
           </form>
          </div>
          <p>If you not create account <Link href="traveller_reg"><button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Registration</button></Link></p>
          <Link href="/home"><button type="button" class="text-white bg-gradient-to-r from-green-400 via-blue-500 to-navy-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Home</button></Link>
        </center>
      </div>
    );
  
    }
export default  TravellerLogIn

    