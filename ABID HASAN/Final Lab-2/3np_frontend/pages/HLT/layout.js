import Link from 'next/link'
import Header from './header'
import Footer from './footer'


const Layout =({children},props) =>{
    return(
        <>
            <center>
            <Header></Header>
            <h2 align="center"></h2>
            <button><Link href="TourGuide/TG_update">Update</Link></button>
            <br></br>
            <button><Link href="TourGuide/TG_delete">Delete</Link></button>
            <br></br>
            <button><Link href="TourGuide/TG_viewProfile">Profile</Link></button>
            <br></br>           
            {children}  
            <br></br>
            <h1>Footer</h1>
           <p> <h3>This is Footer</h3></p>
           <p>For any technical support :</p>
           <p>Email: hasanmollah151@gmail.com</p>

            </center>
        
        </>
    )
}
export default Layout












// export default function Layout ({chlidren},{props}) {
//     return (
//         <>
//             <Header title = "Tipe up"></Header>
//             <h2 align="center">TRIP CONNECT</h2>

//             <button><Link href="/">Home</Link></button>
//             <br></br>
//             <br></br>
//             <button><Link href="TourGuide/TG_signUp">Sign Up</Link></button>
//             <br></br>
//             <br></br>
//             <button><Link href="TourGuide/TG_logIn">Log-In </Link></button> 
//            <br></br> 
//            <br></br>
//             <button><Link href="TourGuide/TG_update">Update</Link></button>
//             <br></br>
//             <br></br>
//             <button><Link href="TG_addtraveller">Add Traveller </Link></button>
//             <br></br>
//             <br></br>
//             <button><Link href="TG_remove_traveller">Remove Traveller</Link></button>
//             <br></br>
//             <br></br>
//             <button><Link href="TourGuide/upload">Image Upload</Link></button>
//             <br></br>
            
//            {props}
//            <br></br>
//            <h1>Footer</h1>
//         </>
//     )
// }