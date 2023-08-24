import Link from 'next/link'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../HLT/header'),{
    ssr:false,    
})

const Title = dynamic(()=> import('../HLT/title'),{
    ssr:false,
})


export default function AddTraveller(){
    return(
        <>
            <Title page="ADD TRAVELLER"></Title>
            <Header></Header>
            <h1 align="center">TRIP CONNECT</h1>

            <h2 align="center">ADD TRAVELLER</h2>
            <div>
            <br></br>
            <form>
                <center>
                <table>
                <tr>
                    <td>NAME:</td>
                    <td><input type="text" name="traveller_name" placeholder="name" ></input></td> 
                </tr>
                    <br></br>
                <tr>
                    <td>USERNAME:</td>
                    <td><input type="text" name="traveller_username" placeholder="username" ></input></td> 
                </tr>
                <br></br>
                <tr>
                    <td>E-MAIL:</td>
                    <td><input type="email" name="traveller_email" placeholder="email" ></input></td> 
                </tr>
                <br></br>
                <tr>
                    <td>CONTACT:</td>
                    <td><input type="tel" name="traveller_contact"  pattern="[+]{1}[0-9]{3}-[0-9]{4}-[0-9]{6}" placeholder="contact number" ></input></td> 
                </tr>
                <br></br>
                <tr>
                    <td>AGE:</td>
                    <td><input type="number" name="traveller_age" placeholder="age" ></input></td> 
                </tr>
                <br></br>
                <tr>
                    <td>GENDER:</td>
                    <td>
                        <input type="radio" name="traveller_gender" value="Male" /> Male 
                        <input type="radio" name="traveller_gender" value="Female" /> Female 
                        <input type="radio" name="traveller_gender" value="Other" /> Other 
                    </td> 
                </tr>
                <br></br>
                <tr>
                <td>PROFESSION:</td>
                <td><input type="text" name="traveller_profession" placeholder="profession" required></input></td> 
                </tr>
                </table>

                    <br></br>
                    <input type="submit" name="add_traveller" value="Register"></input>
                    <br></br>
                    <br></br>
                    <Link href="/">Home page</Link>

                

                </center>

            </form>





            </div>
        
        
        </>


    )
}