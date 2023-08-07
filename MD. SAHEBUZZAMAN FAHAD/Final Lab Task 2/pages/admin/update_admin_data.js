import Link from "next/link";
import Meta from "../meta";
import React, {useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";


const UpdateAdmin = () => {


  const router = useRouter();

  const [user, setUser] = useState({
    fastname: "",
    lastname:"",
    email: "",
    contact:1,
    password: "",
    filename: ""
  });
  const {  fastname, lastname,email,contact, password, filename } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    user.contact = parseInt(user.contact);
    // user.id = parseInt(user.id);
    console.log(user)
    
  
  try {

    const response = await axios.put('http://localhost:3000/admin/updateadmininfo', user, {

      headers: {

        'Content-Type': 'application/json'

      }

    });

    console.log(response.data);

    alert("Admin Update Successful!");
    //router.push('/admin/admin_log');

  } catch (error) {

    console.error('Error Admin Signing Up:', error);

    alert("Admin Update Failed!");

  }

};




    return(
        <React.Fragment>
           <Meta title="Update Admin Info" keywords="fahad" description ="Fahad" />
           <center>

                <h3>Update Admin</h3>
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

                <label>Image
                <input type="file" name="filename"onChange={handleChange}  value={filename}/>
                </label><br></br><br></br>


               <button>Update</button>
            </form>
                <Link href="admin_profile">Admin Profile</Link><br></br><br></br>
                <Link href="/home">Home</Link>
           </center>
    
        </React.Fragment>
    );
}
export default  UpdateAdmin