import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from './HLT/header'
import MyFooter from './HLT/footer'
import Separator from './HLT/separate'


const inter = Inter({ subsets: ['latin'] })
const Layout = dynamic(()=> import('./HLT/layout'),{
  ssr:false,
})
// const MyFooter = dynamic(()=> import('./HLT/footer'),{
//   ssr:false,
// })

const Title = dynamic(()=> import('./HLT/title'),{
  ssr: false,
})

export default function Home() {
  return (
    <div className ='picture'>
     <Title page = "THIS IS THE HOME PAGE"></Title>
      <h1 className='homepg1  text-blue-300'><b>TRIP CONNECT</b></h1>
      <br></br> <br></br>

      <div className='homepg'>
        
          
         <button><Link className="text-blue-300" href="TourGuide/TG_logIn">Log-In |</Link></button> 
          
        <button><Link className="text-blue-300" href="TourGuide/TG_singUp">Sign Up</Link></button>
          
          {/* <button><Link href="TourGuide/TG_profile">Porfile</Link></button> */}
        
      </div>
      <div className='text-white'>
        <p></p>


      </div>
      <br></br><br></br>
      <div>
      
      <MyFooter>

      </MyFooter>
      </div>
    </div>
  )
}