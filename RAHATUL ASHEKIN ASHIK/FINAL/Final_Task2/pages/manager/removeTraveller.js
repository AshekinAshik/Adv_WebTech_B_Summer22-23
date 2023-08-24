import Layout from "../component/layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicRemoveTravellerForm = dynamic(() => import('../component/removeTravellerForm'), {ssr:false});

const RemoveTravellerPage = () => {
    return (
        <>
            <Layout title="Remove Traveller">

            <div>
                <DynamicRemoveTravellerForm />
            </div>

            </Layout>
        </>
    )
};

export default RemoveTravellerPage;


//ANOTHER APPROACH

// import Link from "next/link";
// import dynamic from "next/dynamic";
// import Layout from "./component/layout";

// export default function RemoveTraveller () {
//     return (
//         <>
//             <Layout title="Remove Traveller"/>

//             <Link href="/"> <h1 align="center">TRIP CONNECT</h1> </Link>
//             <br></br> <br></br>
            
//             <div>
//                 <center>
//                     <Link href="updateManager">Update | </Link>
//                     <Link href="addTraveller"> Add Traveller | </Link>
//                     <Link href="viewTraveller"> View Traveller | </Link>
//                     <Link href="updateTraveller"> Modify Traveller | </Link>
//                     <Link href="removeTraveller"> Remove Traveller | </Link>
//                     <Link href="sendMail"> Mail | </Link>
//                     <Link href="addTourGuide"> Add Tour Guide | </Link>
//                     <Link href="viewTourGuide"> View Tour Guide | </Link>
//                     <Link href="assignTourGuide"> Assign Tour Guide | </Link>
//                     <Link href="addHotels"> Hotels | </Link>
//                     <Link href="signIn"> Logout | </Link>
//                 </center>
//             </div>
//             <br></br><br></br>

//             <h2 align="center"> Removal Information </h2>
//             <div>
//                 <br></br>
//                 <form>
//                     <center>
//                     <table>
//                         <tr>
//                             <td>Traveller ID:</td>
//                             <td><input type="text" name="traveller_id" placeholder="whom to remove" required></input></td> 
//                         </tr>
//                     </table>
//                     </center>

//                     <center>
//                     <br></br>
//                     <input type="submit" name="traveller_remove" value="REMOVE"></input>
//                     </center>
//                 </form>
//             </div>
//         </>
//     )
// }