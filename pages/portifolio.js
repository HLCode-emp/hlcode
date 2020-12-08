import Head from 'next/head'
import main from '../styles/Main.module.css'
import home from '../styles/Home.module.css'
import portifolio from '../styles/Portifolio.module.css'
import TitleAnimation from '../components/TitleAnimation';
import PortifolioAnimation from '../components/PortifolioAnimation';

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
        <a href="/" className={main.title}><TitleAnimation /></a>
      </div>
    </div>

    <div className={portifolio.banner}>
      <div className={main.container}>
        <PortifolioAnimation />
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