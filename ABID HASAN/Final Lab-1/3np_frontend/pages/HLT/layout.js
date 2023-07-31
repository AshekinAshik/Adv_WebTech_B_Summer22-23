import Link from 'next/link'
import Header from './header'

export default function Layout ({props}) {
    return (
        <>
            <Header></Header>
            <h2 align="center">TRIP CONNECT</h2>

            <button><Link href="/">Home</Link></button>
            <br></br>
            <br></br>
            <button><Link href="TG_signUp">Sign Up</Link></button>
            <br></br>
            <br></br>
            <button><Link href="TG_logIn">Log-In </Link></button> 
           <br></br> 
           <br></br>
            <button><Link href="TG_update">Update</Link></button>
            <br></br>
            <br></br>
            <button><Link href="TG_addtraveller">Add Traveller </Link></button>
            <br></br>
            <br></br>
            <button><Link href="TG_remove_traveller">Remove Traveller</Link></button>
            <br></br>
            <br></br>
            <button><Link href="upload">Image Upload</Link></button>
            <br></br>
            
           {props}
           <br></br>
           <h1>Footer</h1>
        </>
    )
}