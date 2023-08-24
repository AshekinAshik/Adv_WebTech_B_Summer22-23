import Link from 'next/link';
import dynamic from 'next/dynamic';
import HeaderForSigns from '../component/headerForSigns';

const DynamicSignInForm = dynamic(() => import('../component/signInForm'), {ssr:false});

const SignInPage = () => {
  return (
    <>
      <HeaderForSigns title="Sign In Manager" />

      <Link href="/manager"> <h1 align="center">TRIP CONNECT</h1> </Link>
      <br></br> <br></br>

      <div>

      {/* <SignInForm /> */}
      <DynamicSignInForm/>
    </div>

    </>
  );
};

export default SignInPage;


//ANOTHER APPROACH

// import Link from "next/link";
// import Layout from "./component/layout";

// export default function Signin () {
//     return (
//         <>
//             <Layout title="Manager Update"/>

//             <h1 align="center">TRIP CONNECT</h1>
//             <br></br> <br></br>

//             <h2 align="center"> Sign In </h2>
//             <div>
//                 <br></br>
//                 <form>
//                     <center>
//                     <table>
//                         <tr>
//                             <td>USERNAME:</td>
//                             <td><input type="text" name="manager_username" placeholder="your username" required></input></td> 
//                         </tr>
//                         <br></br>
//                         <tr>
//                             <td>PASSWORD:</td>
//                             <td><input type="text" name="manager_password" placeholder="your password" required></input></td> 
//                         </tr>
//                     </table>

//                     <br></br>
//                     <input type="submit" name="manager_signin_submit" value="Sign In"></input>
//                     </center>

//                     <center>
//                     <br></br>
//                     <Link href="signUp">Not Registered?</Link>
//                     </center>
//                 </form>
//             </div>
//         </>
//     )
// }