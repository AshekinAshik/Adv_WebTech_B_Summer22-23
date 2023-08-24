import Link from "next/link";
import Meta from "../meta";
import React, {useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";


const AdminReg =  () => {
  const router = useRouter();

  const [user, setUser] = useState({
    fastname: "",
    lastname:"",
    email: "",
    contact:1,
    password: "",
    filename: ""
  });
  const { fastname, lastname,email,contact, password, filename } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const handleSubmit =  async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    console.log(user)
    
  
  try {

    const response = await axios.post('http://localhost:3000/admin/register', user, {

      headers: {

        'Content-Type': 'application/json'

      }

    });

    console.log(response.data);

    alert("Admin Registration Successful!");
    router.push('/admin/admin_log');

  } catch (error) {

    console.error('Error Manager Signing Up:', error);

    alert("Admin Registration Failed!");

  }

};


    return (
      <>
        <Meta title="Admin Registration" keywords="fahad" description ="Fahad" />
        <center>

        <h1>This is Admin Registration Page</h1>
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


                <label>Image
                <input type="file" name="filename"onChange={handleChange}  value={filename}/>
                </label><br></br><br></br>


                <button type="submit">Submit</button>
            </form>
        </div>
        
        <p>Already you have a Account! <Link href="admin_log">Log in</Link></p>
        <Link href="/home">Home</Link>

        </center>

      </>
    );
  }

export default  AdminReg