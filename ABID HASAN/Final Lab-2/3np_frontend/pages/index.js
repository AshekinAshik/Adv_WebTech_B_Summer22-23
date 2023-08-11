import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Header from './HLT/header'

const inter = Inter({ subsets: ['latin'] })
const Layout = dynamic(()=> import('./HLT/layout'),{
  ssr:false,
})

const Title = dynamic(()=> import('./HLT/title'),{
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Header title = "THIS IS THE HOME PAGE"></Header>
      
      <h1 align="center">TRIP CONNECT</h1>

      <br></br> <br></br>
      <div>
        <center>
         <button><Link href="TourGuide/TG_logIn">Log-In </Link></button> 
          <br></br> 
          <button><Link href="TourGuide/TG_signUp">Sign Up</Link></button>
        </center>
      </div>
    
      <Layout>

      </Layout>
      
    </>
  )
}