import Link from "next/link";
import Layout from "./component/layout";

export default function Signin () {
    return (
        <>
            <Layout title="Manager Update"/>

            <h2 align="center"> Sign In </h2>
            <div>
                <br></br>
                <form>
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
            </div>
        </>
    )
}