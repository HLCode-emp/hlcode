import Head from 'next/head'
import styles_main from '../styles/Main.module.css'
import styles from '../styles/Home.module.css'

const Home_render = (
  <div>
    {/* header */}
    <Head>
      <title>HLCode - Soluções digitais</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Empresa de soluções digitais"/>
      <meta name="keywords" content="Soluções web, desenvolvimento de sites, desenvolvimento de software, hlcode, jau, jau e região, desenvolvimento web, desenvolvimento full-stack"/>
      <meta name="author" content="HLCode"/>
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