import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "./component/layout";

export default function AssignTourGuide () {
    return (
        <>
            <Layout title="Assign Tour Guide"/>

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

            <h2 align="center"> Assigning Detail </h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table>
                        <tr>
                            <td>Traveller's ID:</td>
                            <td><input type="number" name="traveller_id" placeholder="traveller's id" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>Tour Guide's ID:</td>
                            <td><input type="number" name="tourguide_id" placeholder="tour guide's id" required></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="tourguide_assign" value="ASSIGN"></input>
                    </center>
                </form>
            </div>
        </>
    )
}