import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "./component/layout";

export default function SendMail () {
    return (
        <>
            <Layout title="Send Mail"/>

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

            <h2 align="center"> Mail Detail </h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table>
                        <tr>
                            <td>Subject:</td>
                            <td><input type="text" name="mail_subject" placeholder="what is it about?" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>Message:</td>
                            <td><input type="text" name="mail_message" placeholder="mail body" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="send_mail" value="SEND"></input>
                    </center>
                </form>
            </div>
        </>
    )
}