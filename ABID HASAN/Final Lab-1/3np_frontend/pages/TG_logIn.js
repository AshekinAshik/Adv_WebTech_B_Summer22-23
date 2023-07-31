import Link from "next/link";
import Layout from "./HLT/layout";
import dynamic from "next/dynamic";

const Header = dynamic(() => import('./HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('./HLT/title'),{
    ssr:false,
})

export default function Login () {
    return (
        <>
            <Title title="TourGuide Information"></Title>
            <Header></Header>

            <h2 align="center"> LOGIN IN</h2>
            <div>
                <br></br>
                <form>
                    <center>
                    <table>
                        <tr>
                            <td>E-MAIL:</td>
                            <td><input type="text" name="name" placeholder="name" ></input></td> 
                        </tr>
                        <br></br>
                        <tr>
                            <td>PASSWORD:</td>
                            <td><input type="text" name="password" placeholder="password" ></input></td> 
                        </tr>
                    </table>

                    <br></br>
                    <input type="submit" name="submit" value="Log-In"></input>
                    </center>

                    <center>
                    <br></br>
                    <Link href="/TG_signUp">Not Registered?</Link>
                    </center>
                </form>
            </div>
        </>
    )
}