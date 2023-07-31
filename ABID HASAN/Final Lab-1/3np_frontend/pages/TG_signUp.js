import Link from "next/link";
import Layout from "./HLT/layout";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('./HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('./HLT/title'),{
    ssr:false,
})

export default function Signup () {
    return (
        <>
            <Title page="Sing UP"></Title>
            <Header></Header>

            <h2 align="center"> Sign Up </h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table>
                        <tr>
                            <td>NAME:</td>
                            <td><input type="text" name="name" placeholder="Name" ></input></td> 
                        </tr>
                        <br></br>
                        
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="email" name="email" placeholder="email"></input></td> 
                        </tr>
                        <br></br>
                        
                        <tr>
                            <td>CONTACT NUMBER:</td>
                            <td><input type="tel" name="contact" pattern="[+]{1}[0-9]{3}-[0-9]{4}-[0-9]{6}" placeholder="contact number"></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PASSWORD:</td>
                            <td><input type="password" name="password" placeholder="password" ></input></td> 
                        </tr>
                        
                    </table>

                    <br></br>
                    <input type="submit" name="submit" value="Sign Up"></input>
                    </center>

                    <center>
                    <br></br>
                    <Link href="TG_logIn">Already Have an Account?</Link>
                    </center>
                </form>
            </div>
        </>
    )
}