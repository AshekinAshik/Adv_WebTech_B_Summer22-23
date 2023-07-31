import Link from "next/link";
import Layout from "./layout";
import Image from 'next/image'

export default function Header() {
    return (
      <div>
        <Link href="#">Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="#">About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="#">Tour Point&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="#">Place&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
        <Link href="#">Contact</Link>
      </div>
    )
  }