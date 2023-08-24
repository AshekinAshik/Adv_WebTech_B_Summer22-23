import { useRouter } from 'next/router';
import Link from 'next/link';

const SignUpForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    router.push('/manager/signIn');
  };

  return (
    <>
      <h2 align="center">Registration Details</h2>
      <br></br> <br></br>
      
      <form onSubmit={handleSubmit}>
        <center>
          <table>
              <tr>
                  <td>NAME:</td>
                  <td><input type="text" name="manager_name" placeholder="your name" required></input></td> 
              </tr>
              <br></br>
              <tr>
                  <td>USERNAME:</td>
                  <td><input type="text" name="manager_username" placeholder="your username" required></input></td> 
              </tr>
              <br></br>
              <tr>
                  <td>E-MAIL:</td>
                  <td><input type="text" name="manager_email" placeholder="your email" required></input></td> 
              </tr>
              <br></br>
              <tr>
                  <td>CONTACT:</td>
                  <td><input type="text" name="manager_contact" placeholder="your contact number" required></input></td> 
              </tr>
              <br></br>
              <tr>
                  <td>PASSWORD:</td>
                  <td><input type="text" name="manager_password" placeholder="your password" required></input></td> 
              </tr>
          </table>

          <br></br>
          <input type="submit" name="manager_signup_submit" value="Sign Up"></input>
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
