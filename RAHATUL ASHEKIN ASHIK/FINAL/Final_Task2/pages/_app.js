import '@/styles/globals.css'
import Layout from './component/layout'

export default function App({ Component, pageProps }) {
  // return (
  //   <>
  //     <Layout>
  //       <Component {...pageProps} />
  //       <br></br><br></br><br></br>
  //     </Layout>
  //   </>
  // )

  return <Component {...pageProps} />
}
