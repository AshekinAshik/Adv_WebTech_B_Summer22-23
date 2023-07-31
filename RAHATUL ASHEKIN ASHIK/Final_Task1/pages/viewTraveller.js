import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "./component/layout";

export default function ViewTraveller () {
    return (
        <>
            <Layout title="View Traveller"/>

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

            <h2 align="center"> Traveller Details </h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table border="1">
                    <tr> 
                        <th> Name </th>
                        <th> Username </th>
                        <th> E-Mail </th>
                        <th> Contact </th>
                        <th> Age </th>
                        <th> Gender </th>
                        <th> Profession </th>
                    </tr>
                    <tr align="center">
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                        <td>n/a</td>
                    </tr>
                    </table>
                    </center>
                </form>
            </div>
        </>
    )
}