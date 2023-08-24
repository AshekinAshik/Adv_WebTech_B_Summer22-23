import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import MyFooter from '../component/footer'
import HeaderSeparate from '../component/headerSeparate'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderSeparate title="HOME" />

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

      <br></br><br></br><br></br>
      <div>
        <MyFooter />
      </div>
    </>
  )
}
