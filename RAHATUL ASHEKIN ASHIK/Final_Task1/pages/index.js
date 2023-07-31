import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1 align="center">TRIP CONNECT</h1>

      <br></br> <br></br>
      <div>
        <center>
          <Link href="signIn">Sign In | </Link>
          <Link href="signUp">Sign Up</Link>
        </center>
      </div>
    </>
  )
}
