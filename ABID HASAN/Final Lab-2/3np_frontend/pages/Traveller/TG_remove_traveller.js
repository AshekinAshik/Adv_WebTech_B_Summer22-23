import Link from 'next/link';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('../HLT/title'),{
    ssr:false,
})





export default function RemoveTraveller () {
    return(
        <>
            <Title page="REMOVE TRAVELLER"></Title>
            <Header></Header>
            <h1 align="center">TRIP CONNECT</h1>
            <br></br>
            <h2 align="center">ADD TRAVELLER</h2>
            <div>
                <br></br>
                <form>
                    <center>
                        <table>
                            <tr>
                                <td>TRAVELLER ID:</td>
                                <td><input type="number" name="traveller_id" placeholder="which id"></input></td>
                            </tr>
                        </table>
                    </center>
                    <center>
                        <br></br>
                        <input type="submit" name="traveller_remove" value="REMOVE"></input>
                        <br></br>
                        <br></br>
                        <Link href="/">Home page</Link>
                    </center>
                </form>





            </div>
        
        
        
        </>




    )





}