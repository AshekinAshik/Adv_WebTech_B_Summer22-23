import Link from "next/link";
import Meta from "../meta";
import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AdminLogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter();

  const handleEChange = (e)=>{
    setEmail(e.target.value);
  }
  const handlePChange = (e)=>{
    setPassword(e.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/admin/login', { email, password });
      console.log("res: "+response.data)
      alert("Log in Successful")
      router.push('/admin/admin_profile');

    } catch (error) {
        console.log("error22: "+error.message)
      alert("Not Mach Data")
    }
  }


    return (
      <div> 
        <Meta title="Log In Page" keywords="fahad" description ="Fahad" />
       <center>
          <h1>This is Admin Log in Page</h1>
          <div>
            <form onSubmit={handleSubmit}>
            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="email"  name="email" value={email} onChange={handleEChange} />
            </label><br></br><br></br>

            <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text"  name="password"  value={password} onChange={handlePChange}/>
            </label><br></br><br></br>


           <button type="submite" >Log In</button>
           </form>
          </div>
          <p>If you not create account <Link href="admin_reg">Registration</Link></p>
          <Link href="/home">Home</Link>
        </center>
      </div>
    );
  }

export default  AdminLogIn