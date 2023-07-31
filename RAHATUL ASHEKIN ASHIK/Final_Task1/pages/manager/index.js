import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Link href="/manager"> <h1 align="center">TRIP CONNECT</h1> </Link>
      <br></br> <br></br>
      
      <div>
        <center>
          <Link href="/manager/signIn">Sign In | </Link>
          <Link href="/manager/signUp">Sign Up</Link>
        </center>
      </div>

      <div>
        <center>
          <br></br><br></br>
        <Image src="/tripconnect.gif" alt="Trip Connect gif" width={500} height={500} />
        </center>
      </div>
    </>
  )
}
