import Image from "next/image"
import Link from "next/link"

export default function Content(){
    return(
     <div>
        <div>
        <div>
       
       <h1>Home Page</h1>
       <ul>
         <li><Link href="./Traveller/traveller_profile">Traveller Data</Link></li>

         <li><Link href="./Tourguid/tourguid_list">Tourguid List</Link></li>
         <li><Link href="./Places/tourist_spot"> Tourist Place</Link></li>
         
       </ul>
       </div>
       <div>
         <p>First Register Your Account! <Link href="./Traveller/traveller_reg">Register</Link></p>
         <p>Log In Your Account <Link href="./Traveller/traveller_log">Log in</Link></p>
         <Image 
            src="/image.jpg" 
            alt="Photo" 
            height={250} 
            width={300}
         />
       </div>
        </div>
     </div>
    )
}