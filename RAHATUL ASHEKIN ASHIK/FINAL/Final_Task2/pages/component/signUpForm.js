import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios';
import React, { useState } from 'react';

const SignUpForm = () => {
  const router = useRouter();

  const [signUpForm, setSignUpFormData] = useState({
    name: "",
    username: "",
    email: "",
    contact: 1,
    password: "",
  });

  //const {name, username, email, contact, password} = signUpForm;

  const handleChange = (e) => {
    setSignUpFormData({ ...signUpForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    signUpForm.contact = parseInt(signUpForm.contact);
    console.log(signUpForm);

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_BASE_URL+ '/register', signUpForm, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(response.data);
      alert("Manager Registration Successful!");
      router.push('/manager/signIn');
    } catch (error) {
      console.error('Error Manager Signing Up:', error);
      alert("Manager Registration Failed!");
    }
  };

  return (
    <>
      <h2 align="center"> Registration Details </h2>
      <br></br><br></br>

      <form onSubmit={handleSubmit}>
        <center>
          <table>
            <tr>
              <td>NAME:</td>
              <td><input type="text" name="name" placeholder="your name" onChange={handleChange} required /></td>
            </tr>
            <br></br>
            <tr>
              <td>USERNAME:</td>
              <td><input type="text" name="username" placeholder="your username" onChange={handleChange} required /></td>
            </tr>
            <br></br>
            <tr>
              <td>E-MAIL:</td>
              <td><input type="email" name="email" placeholder="your email" onChange={handleChange} required /></td>
            </tr>
            <br></br>
            <tr>
              <td>CONTACT:</td>
              <td><input type="number" name="contact" placeholder="your contact number" onChange={handleChange} required /></td>
            </tr>
            <br></br>
            <tr>
              <td>PASSWORD:</td>
              <td><input type="password" name="password" minLength="8" placeholder="your password" onChange={handleChange} required /></td>
            </tr>
          </table>

          <br></br>
          <input type="submit" name="manager_signup_submit" value="Sign Up" />
        </center>

        <center>
          <br></br>
          <Link href="signIn">Already Registered?</Link>
        </center>
      </form>
    </>

  );
};

export default SignUpForm;
