import Head from 'next/head'
import main from '../styles/Main.module.css'
import home from '../styles/Home.module.css'
import UncontrolledLottie from '../components/UncontrolledLottie';

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
    <div className={main.header}>
      <div className={main.container}>
        <a href="/" className={main.title}><UncontrolledLottie /></a>
      </div>
    </div>

    <section className={home.banner}>
      <div className={home.overlay}></div>
      <div className={main.container}>
        <div className={home.box_call}>

          <div><p>Sistemas únicos para empresas autênticas!</p></div>

          <div className={home.bars}>
            <div className={home.bar1}></div>
            <div className={home.bar2}></div>
          </div>

          <ul>
            <li>Sites institucionais</li>
            <li>Lojas virtuais</li>
            <li>Soluções web</li>
            <li>Sistemas digitais</li>
          </ul>

        </div>

        <div className={home.box_form_banner}>
          <div className={home.background_form_banner}>
            <form action="/api/send-mail" method="post" className={home.form_banner}>

              <h2>Quer que entremos em contato?</h2>
              <p><b>Preencha o formulario</b>, e entraremos em contato assim que possivel.</p>

              <label><div>Nome ou apelido: <span>*</span></div>
                <input type="text" name="name" placeholder="nome ou apelido" className={home.campo_form} required />
              </label>

              <label><div>Email: <span>*</span></div>
                <input type='email' name="email" placeholder="Email" className={home.campo_form} required />
              </label>

              <label><div>Telefone: <span>*</span></div>
                <input type="text" name="telephone" placeholder="telefone" className={home.campo_form, home.phone} required />
                <span>WhatsApp:</span> <input type="checkbox" name="whatsapp" className={home.wpp_form}/>
              </label>

              <label><div>Descreva seu projeto:</div>
                <textarea name="description" className={home.campo_form}></textarea>
              </label>

              <input type="submit" value="Enviar!" className={home.btn_form} />

            </form>
          </div>
        </div>
      </div>
    </section>
  </div>

)
  

function Home() {
  return (
    Home_render
  )
}

export default Home