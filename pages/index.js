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

      <link rel="shortcut icon" href="../public/favicon.ico" />
    </Head>

    {/* Page */}
    <div className={styles_main.header}>
      <div className={styles_main.container}>
        <a href="/" className={styles_main.title}>HLCODE</a>
      </div>
    </div>

    <section className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles_main.container}>
        <div className={styles.box_call}>

          <div><p>Sistemas únicos para empresas autênticas!</p></div>

          <div className={styles.bars}>
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
          </div>

          <ul>
            <li>Sites institucionais</li>
            <li>Lojas virtuais</li>
            <li>Soluções web</li>
            <li>Sistemas digitais</li>
          </ul>

        </div>

        <div className={styles.box_form_banner}>
          <div className={styles.background_form_banner}>
            <form action="/api/send-mail" method="post" className={styles.form_banner}>

              <h2>Quer que entremos em contato?</h2>
              <p><b>Preencha o formulario</b>, e entraremos em contato assim que possivel.</p>

              <label><div>Nome ou apelido: <span>*</span></div>
                <input type="text" name="name" placeholder="nome ou apelido" className={styles.campo_form} required />
              </label>

              <label><div>Email: <span>*</span></div>
                <input type='email' name="email" placeholder="Email" className={styles.campo_form} required />
              </label>

              <label><div>Telefone: <span>*</span></div>
                <input type="text" name="telephone" placeholder="telefone" className={styles.campo_form, styles.phone} required />
                <span>WhatsApp:</span> <input type="checkbox" name="whatsapp" className={styles.wpp_form}/>
              </label>

              <label><div>Descreva seu projeto:</div>
                <textarea name="description" className={styles.campo_form}></textarea>
              </label>

              <input type="submit" value="Enviar!" className={styles.btn_form} />

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