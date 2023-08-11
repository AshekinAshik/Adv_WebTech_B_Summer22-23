import Link from "next/link";
import Layout from "../HLT/layout";
import dynamic from "next/dynamic";
import { useState, useEffect, useContext, useRef } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Header = dynamic(() => import('../HLT/header'), {
    ssr: false,
})

const Title = dynamic(() => import('../HLT/title'), {
    ssr: false,
})

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    // const[user,setUser]=useState({
    //     name:"",
    //     email:"",
    //     password:""
    // });
    // const {name,email,password}=user;

    // const handleChange = (e)=>{
    //     setUser({ ...user,[e.target.name]:e.target.value});
    // };


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !email || !password) {
            setError('Information are required');
        }
        else if (!isvalidName(name)) {
            setError('invalid name');
        }
        else {
            setError('');

            try {
                const response = await axios.post(process.env.NEXT_PUBLIC_SINGUP_TG+"/login", {
                    name,
                    email,
                    password,
                });
                
                console.log(response.data)
                alert("Registration Successful")
                router.push('TG_viewProfile');

            }

             catch (error) {
                console.error('Login Failed:', error);
                if (error.response && error.response.data) {
                    console.error('Response Data:', error.response.data)
                }
                alert("Login Failed")
              //  setError('Error Occured during login')
            }
        }
    };

    const isvalidName = (name) => {
        const namePattern = /^[a-z A-Z]+$/;
        return namePattern.test(name);
    };

    return (
        <>
            <Title title="TourGuide Information"></Title>
            <Header></Header>

            {/* <h2 align="center"> LOGIN IN</h2>
            {success?(
                <section>
                    <h1>You are logged in!</h1>
                    <br></br>
                    <Link href="HLT/layout"></Link>
                </section>

            )
            
        
        } */}
            <div>
                <center>
                    <h1>Log In Page</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
                            </label><br></br><br></br>

                            <label>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                            </label><br></br><br></br>

                            <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </label><br></br><br></br>


                            <button type="submit" >Log In</button>
                        </form>
                    </div>
                    <p>Don't Have An Account <Link href="TG_signUp">Sign In</Link></p>
                    <Link href="/">Home</Link>
                </center>
            </div>


            {/* <div>
                <br></br>
                <form onSubmit={handleSubmit}>
                    <center>
                    <table>
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="email" name="email" placeholder="email" value={email} onChange={handleEmailChange} ></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PASSWORD:</td>
                            <td><input type="password" name="password" placeholder="password" value={pwd} onChange={handlePasswordChange} ></input></td> 
                        </tr>
                    </table>

                    <br></br>
                    <input type="submit" name="submit" value="Log-In"></input>
                    </center>

                    <center>
                    <br></br>
                    <Link href="/TG_signUp">Not Registered?</Link>
                    <br></br>
                    <br></br>
                    <Link href="/">Home page</Link>
                    </center>
                </form>
            </div> */}
        </>
    )
}

export default Login;