import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout from './home_header_fotter_content/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <div>
      <Layout page="home">
      
      </Layout>
    </div>
    
  )
}
