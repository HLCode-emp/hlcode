import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return(
    <Head>
        <link rel="shortcut icon" href="http://localhost:3000/public/favicon.ico" />
    </Head>,

    <Component {...pageProps} />
  )
}

export default MyApp