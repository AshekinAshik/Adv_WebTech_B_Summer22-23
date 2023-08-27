import Link from "next/link";
import React,{useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SessionCheck from "../HLT/sessioncheck";
import MyFooter from "../HLT/footer";
import Title from "../HLT/title";


const Login =()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]= useState('');
    const router =useRouter();
    
    useEffect(()=>{
        if (typeof window!== 'undefined')
        {
            const session = sessionStorage.getItem('name');
            if(session){
                setName(sessionStorage.getItem('name'));
                router.push('TG_profile')
            }
        }
    }, []);

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }

    const isValidEmail = (email) => {
        const emailPattern = /^\S+@\S+\.\S+$/;
        return emailPattern.test(email);
      };
    const isValidName = (name) => {
        const namePattern = /^[a-z A-Z]+$/;
        return namePattern.test(name);
      };

    const isValidPassword = (password)=>{
        const passwordPattern = /^\d+$/;
        return passwordPattern.test(password);
    }


      const handleSubmit = async (event) => {
        event.preventDefault()
        if (!name || !email || !password ) {
          setError('Name Email and password are required');
        } else if (!isValidEmail(email)) {
          setError('Invalid email address');
        } else if(!isValidName(name)){
            setError('Only contain Upper or Lower charecter')
        } else if(!isValidPassword(password)){
            setError('Only contain number')
        }
        else {
          const res = await doLogIn(name, email, password)
          console.log(res);
    
        }
      }
    async function doLogIn(name, email, password){
        try{
            const response = await axios.post(process.env.NEXT_PUBLIC_TG + '/login',{name,email,password},{

                headers:{'Content-Type':'application/x-www-form-urlencoded'},
                withCredentials: true
            });
            sessionStorage.setItem('name', response.data);
            sessionStorage.getItem(document.cookie)
            console.log(document.cookie);
            alert("Log in Successful")
            router.push('TG_profile');
           //window.location.reload();
        }catch(error){
            console.log(error);
            alert("Failed!")
        }

    }


    return (
        <div className="bg-slate-600 p-20">
            
               <Title page="LOG IN"></Title>

            <div>
                <SessionCheck/>
                <center>
                    <br></br>
                    <h1 className="text-white"><b>LOG IN PAGE</b></h1>
                    <br></br>
                    <div>
                        <form className="inline-block" onSubmit={handleSubmit}>
                            <label className="texts">Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200" type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange}  />
                            </label><br></br><br></br>

                            <label className="texts">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200" type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                            </label><br></br><br></br>

                            <label className="texts">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200"  type="password" name="password" placeholder="Password" value={password}  onChange={handlePasswordChange} />
                            </label><br></br><br></br>

                            
                            {error && <p>{error}</p>}
                            <button className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" >Log In</button>
                        </form>
                    </div>
                    <p className="mt-8 texts"><b>Don't Have An Account</b> <Link className="bts mt-6 mb-6 bts focus:outline-none text-white bg-blue-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" href="TG_singUp">Sign In</Link></p>
                    <Link className="mt-8 texts" href="/"><b>Home</b></Link>
                </center>
            </div>
            <div>
                <center>
                    <br></br>
                    <MyFooter/>
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
        </div>
    )
}

export default Login;

// const DynamicLogInForm = dynamic(() => import ('../HLT/loginform'),{ssr:false});


// const LogInPage = () => {
//     return (
//       <>
//         <Separator title="Log In" />
  
//         <Link href="TourGuide"> <h1 align="center">TRIP CONNECT</h1> </Link>
//         <br></br> <br></br>
  
//         <div>
//           {/* <SignInForm /> */}
  
//           <DynamicLogInForm />
//         </div>
  
//         <br></br><br></br><br></br>
//         <div>
//           <MyFooter />
//         </div>
//       </>
//     );
//   };
  
//   export default LogInPage;