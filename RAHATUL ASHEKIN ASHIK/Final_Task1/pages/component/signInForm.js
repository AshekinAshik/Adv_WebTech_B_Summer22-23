import { useRouter } from 'next/router';
import Link from 'next/link';

const SignInForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    router.push('/manager/updateManager');
  };

  return (
    <>
        <h2 align="center">SignIn Details</h2>
        <br></br> <br></br>
        
        <form onSubmit={handleSubmit}>
            <center>
                <table>
                    <tr>
                        <td>USERNAME:</td>
                        <td><input type="text" name="manager_username" placeholder="your username" required></input></td> 
                    </tr>
                    <br></br>
                    <tr>
                        <td>PASSWORD:</td>
                        <td><input type="text" name="manager_password" placeholder="your password" required></input></td> 
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
