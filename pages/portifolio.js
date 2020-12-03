import Head from 'next/head'
import styles_main from '../styles/Main.module.css'
import styles from '../styles/Portifolio.module.css'

const Home_render = (
  <div>
    {/* header */}
    <Head>
      <title>Portifólio | HLCode - Soluções digitais</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Portifólio da HLCode"/>
      <meta name="author" content="HLCode"/>

      <link rel="shortcut icon" href="../public/favicon.ico" />
    </Head>

    {/* Page */}
    <h1>Hello, world</h1>
  </div>

)
  

function Home() {
  return (
    Home_render
  )
}

export default Home