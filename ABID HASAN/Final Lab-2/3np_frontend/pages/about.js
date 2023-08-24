//import Meta from "./meta"

// export default function AboutUs(){
//     return(
//         <>
//         <Meta title="Home Page" keywords="fahad" description ="Fahad" />
//         <center>
//             <h3>Travel Bloger</h3>
//             <p>As a travel blogger, I'm always excited to share my adventures and experiences with my readers. Traveling allows me to explore new cultures, meet interesting people, and immerse myself in the beauty of diverse landscapes.

// From breathtaking sunsets on pristine beaches to awe-inspiring hikes through lush forests, each destination I visit leaves a lasting impression on my soul. It's incredible how different parts of the world can offer such unique and captivating experiences.

// One of the most rewarding aspects of travel blogging is the opportunity to inspire others to embark on their own journeys. Through my writing and photography, I hope to ignite the wanderlust in my readers and encourage them to step out of their comfort zones.

// I firmly believe that travel is not just about ticking off bucket-list destinations; it's about the journey itself. The memories created along the way, the unexpected encounters, and the lessons learned are what make each trip truly unforgettable.

// Travel has also taught me to appreciate the little things in life. Whether it's savoring a local delicacy, wandering through colorful markets, or simply enjoying a leisurely stroll in a charming town, these small moments are the ones that make a big difference in our lives.

// Of course, travel isn't always smooth sailing. There are challenges and obstacles that come with exploring new territories. But it's precisely these moments that push me to grow and discover my true capabilities.

// As I continue my journey as a travel blogger, I'm eager to connect with fellow adventurers and learn from their experiences. Travel has a way of bringing people together, transcending borders, and fostering a sense of global unity.

// Through my blog, I hope to promote responsible and sustainable travel practices, encouraging travelers to be mindful of their impact on the environment and local communities. Traveling responsibly ensures that the destinations we love remain preserved for future generations to enjoy.

// In the end, travel is an endless source of inspiration, and I can't wait to explore more corners of the world, share my stories, and inspire others to embark on their own unforgettable journeys. So, join me as we uncover the beauty and wonder that this world has to offer!</p>
//         </center>
        
//         </>
//     )
// }


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

    alert("Manager Registration Successful!");
    router.push('/admin/admin_log');

  } catch (error) {

    console.error('Error Manager Signing Up:', error);

    alert("Manager Registration Failed!");

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