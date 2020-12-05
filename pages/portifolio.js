import Head from 'next/head'
import main from '../styles/Main.module.css'
import home from '../styles/Home.module.css'
import portifolio from '../styles/Portifolio.module.css'
import UncontrolledLottie from '../components/UncontrolledLottie';

const Home_render = (
  <div>
    {/* header */}
    <Head>
      <title>Portifólio | HLCode - Soluções digitais</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Portifólio da HLCode"/>
      <meta name="author" content="HLCode"/>
    </Head>

    {/* Page */}
    <div className={main.header}>
      <div className={main.container}>
        <a href="/" className={main.title}><UncontrolledLottie /></a>
      </div>
    </div>
  </div>

)
  

function Home() {
  return (
    Home_render
  )
}

export default Home