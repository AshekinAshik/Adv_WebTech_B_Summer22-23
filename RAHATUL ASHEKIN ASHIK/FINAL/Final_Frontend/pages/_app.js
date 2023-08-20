import '../styles/globals.css'
import { AuthProvider } from './utils/authContext'

export default function App({ Component, pageProps }) {
  // return (
  //   <>
  //     <Layout>
  //       <Component {...pageProps} />
  //       <br></br><br></br><br></br>
  //     </Layout>
  //   </>
  // )

  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
        <br></br><br></br><br></br>
      </AuthProvider>
    </>
  );

  //return <Component {...pageProps} />
}
