import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "./component/layout";

export default function UpdateManager () {
    return (
        <>
            <Layout title="Manager Update"/>

            <h1>TRIP CONNECT</h1>
            <div>
                <center>
                    <Link href="updateManager">Update | </Link>
                    <Link href="addTraveller"> Add Traveller | </Link>
                    <Link href="viewTraveller"> View Traveller | </Link>
                    <Link href="updateTraveller"> Modify Traveller | </Link>
                    <Link href="removeTraveller"> Remove Traveller | </Link>
                    <Link href="sendMail"> Mail | </Link>
                    <Link href="addTourGuide"> Add Tour Guide | </Link>
                    <Link href="viewTourGuide"> View Tour Guide | </Link>
                    <Link href="assignTourGuide"> Assign Tour Guide | </Link>
                    <Link href="addHotels"> Hotels | </Link>
                    <Link href="signIn"> Logout | </Link>
                </center>
            </div>
            <br></br><br></br>

            <h2 align="center"> Update Information </h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table>
                        <tr>
                            <td>NAME:</td>
                            <td><input type="text" name="manager_name" placeholder="your name" required></input></td> 
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
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="manager_update_submit" value="UPDATE"></input>
                    </center>
                </form>
            </div>
        </>
    )
}