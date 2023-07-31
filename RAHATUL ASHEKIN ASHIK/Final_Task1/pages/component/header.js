import Head from "next/head";
import Link from "next/link";

const MyHeader = (props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            
            <Link href="/"> <h1 align="center">TRIP CONNECT</h1> </Link>
            <br></br> <br></br>

            <div>
                <center>
                    <Link href="./updateManager">Update | </Link>
                    <Link href="./addTraveller"> Add Traveller | </Link>
                    <Link href="./viewTraveller"> View Traveller | </Link>
                    <Link href="./updateTraveller"> Modify Traveller | </Link>
                    <Link href="./removeTraveller"> Remove Traveller | </Link>
                    <Link href="./sendMail"> Mail | </Link>
                    <Link href="./addTourGuide"> Add Tour Guide | </Link>
                    <Link href="./viewTourGuide"> View Tour Guide | </Link>
                    <Link href="./assignTourGuide"> Assign Tour Guide | </Link>
                    <Link href="./addHotels"> Hotels | </Link>
                    <Link href="./signIn"> Logout </Link>
                </center>
            </div>
            <br></br><br></br>
        </>
    )
};

export default MyHeader;


// export default function MyHeader(props) {
//     return(
//         <>
//             <Head>
//                 <title>{props.title}</title>
//                 {/* <link rel="icon" type="image/x-icon" href="/ico.svg"></link> */}
//             </Head>
//         </>
//     )
// }