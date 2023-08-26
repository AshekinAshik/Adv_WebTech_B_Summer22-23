import Head from 'next/head'
import MyHeader from './header'
import MyFooter from './footer'
import SessionCheck from '../utils/sessionCheck'

export default function Layout({ children, title }) {
    return (
        <>
            <SessionCheck />
            
            <Head>
                <title> {title} </title>
            </Head>

            <MyHeader />
            <br></br> <br></br> <br></br>

            {children}

            <MyFooter />
        </>
    )
}