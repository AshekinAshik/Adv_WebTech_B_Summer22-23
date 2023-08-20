import Head from 'next/head'
import MyHeader from './header'
import MyFooter from './footer'

export default function Layout({ children, title }) {
    return (
        <>
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