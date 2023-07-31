import Link from "next/link";
import dynamic from "next/dynamic";

import Layout from "./HLT/layout";

const Header = dynamic(() => import('./HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('./HLT/title'),{
    ssr:false,
})


export default function UpdateTourGuide() {
    return (
        <>
            <Title page="Update TourGuide"></Title>
            <Header></Header>
            
            <h1 align="center">TRIP CONNECT</h1>
            <div>
                {/* <center>
                    <Link href="TG_update">Update | </Link>
                    <Link href="TG_login"> LogIn | </Link>
                </center> */}
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
                            <td><input type="text" name="name" placeholder="name" required></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="email" name="email" placeholder="email" ></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>CONTACT:</td>
                            <td><input type="tel" id="contact" name="contact" pattern="[+]{1}[0-9]{3}-[0-9]{4}-[0-9]{6}" placeholder="contact number" ></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PASSWORD:</td>
                            <td><input type="password" name="password" placeholder="password" ></input></td> 
                        </tr>
                    </table>
                    </center>

                    <center>
                    <br></br>
                    <input type="submit" name="update" value="UPDATE"></input>
                    </center>
                </form>
                
            </div>
            
        </>
    )
}