import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
  const router = useRouter();

  const [signInForm, setSignInFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignInFormData({ ...signInForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signInForm);

    try {
      const response = await axios.post('http://localhost:3000/manager/login', signInForm, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      alert("Manager Login Successful!");
      router.push('/manager/updateManager');
    } catch (error) {
      console.error('Error Manager Login:', error);
      alert("Manager Login Failed!");
    }
  };

  return (
    <>
      <h2 align="center"> Sign In Details </h2>
      <br></br><br></br>

      <form onSubmit={handleSubmit}>
        <center>
          <table>
            <tr>
              <td>USERNAME:</td>
              <td><input type="text" name="username" placeholder="your username" onChange={handleChange} required /></td>
            </tr>
            <br></br>
            
            <tr>
              <td>PASSWORD:</td>
              <td><input type="password" name="password" placeholder="your password" onChange={handleChange} required /></td>
            </tr>
          </table>

          <br></br>
          <input type="submit" name="manager_signin_submit" value="Sign In"></input>
        </center>

        <center>
          <br></br>
          <Link href="signUp">Not Registered?</Link>
        </center>
      </form>
    </>
  );
};

export default SignInForm;