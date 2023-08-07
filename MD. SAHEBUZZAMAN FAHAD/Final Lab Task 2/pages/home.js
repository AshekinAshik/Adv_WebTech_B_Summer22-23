import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React from 'react'
import Meta from './meta'

const inter = Inter({ subsets: ['latin'] })



const Home = () => {
  return (
    <React.Fragment>
    
      <Meta title="Home Page" keywords="fahad" description ="Fahad" />
      <center>
          <h1>This is Home Page</h1>
          <Link href="./admin/admin_profile">Admin Data</Link><br></br>
          <Link href="./manager/manager_all_data">Manager List</Link><br></br>
          <Link href="./traveler/traveler_list">Traveler List</Link><br></br>
          <Link href="./tourguid/tourguid_list">Tourguid List</Link><br></br>
          <Link href="../payment/payment_h">Show Payment History</Link>


          <p>If you are not register! <Link href="./admin/admin_reg">Register</Link></p>
          <p>Already have a account <Link href="./admin/admin_log">Log in</Link></p>
          <Image 
              src="/fahad1.png" 
              alt="Photo" 
              height={250}
              width={300}
          />
      </center>
    </React.Fragment>
    
  );
}

export default  Home