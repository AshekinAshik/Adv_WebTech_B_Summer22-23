import Image from "next/image"
import Link from "next/link"

export default function Content(){
    return(
     <div>
        <div>
        <div>
       
       <h1>This is Home Page</h1>
       <ul>
         <li><Link href="./admin/admin_profile">Admin Data</Link></li>
         <li><Link href="./manager/manager_all_data">Manager List</Link></li>
         <li><Link href="./traveler/traveler_list">Traveler List</Link></li>
         <li><Link href="./tourguid/tourguid_list">Tourguid List</Link></li>
         <li><Link href="../payment/payment_h">Show Payment History</Link></li>
       </ul>
       </div>
       <div>
         <p>If you are not register! <Link href="./admin/admin_reg">Register</Link></p>
         <p>Already have a account <Link href="./admin/admin_log">Log in</Link></p>
         <img src="fahad.jpg" height="250" width="300"/>
       </div>
        </div>
     </div>
    )
}
