import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "./component/layout";

export default function UpdateTraveller () {
    return (
        <>
            <Layout title="Traveller Update"/>

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
                            <td><input type="text" name="traveller_name" placeholder="your name" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="text" name="traveller_email" placeholder="your email" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>CONTACT:</td>
                            <td><input type="text" name="traveller_contact" placeholder="your contact number" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>AGE:</td>
                            <td><input type="number" name="traveller_age" placeholder="your age" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PROFESSION:</td>
                            <td><input type="text" name="traveller_profession" placeholder="your profession" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="traveller_update_submit" value="UPDATE"></input>
                    </center>
                </form>
            </div>
        </>
    )
}