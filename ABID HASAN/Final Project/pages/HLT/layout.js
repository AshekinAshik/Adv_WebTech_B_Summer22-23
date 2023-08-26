import Header from './header'
import MyFooter from './footer'
import Head from 'next/head'


const Layout =({children,title}) =>{
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header/>
            {/* <Header title={props.title}></Header> */}
            {/* <h2 align="center"></h2>
            <button><Link href="TourGuide/TG_update">Update</Link></button>
            <br></br>
            <button><Link href="TourGuide/TG_delete">Delete</Link></button>
            <br></br>
            <button><Link href="TourGuide/TG_viewProfile">Profile</Link></button> */}
            <br></br>           
            {children}  
            <br></br>
            <MyFooter></MyFooter>
           {/* <p> <h3>This is Footer</h3></p>
           <p>For any technical support :</p>
           <p>Email: hasanmollah151@gmail.com</p> */}

        
        
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