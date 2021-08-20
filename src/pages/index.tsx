import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Blog da exiospace 💙</title>
      </Head>
      <main className={styles.contentContainer} >
        <section className={styles.hero}>
          <span>👏 Olá, seja bem-vindo(a)</span>
          <h1>Novidades sobre a <span>programação</span> no mundo do react.</h1>
          <p>
            Tenha acesso total as nossas publicações <br />
            e <span>evolua</span> seu conhecimento.
          </p>
          <Link href="/posts">
            <a>Acessar conteúdo</a>
          </Link>
        </section>

        <img src="/avatar.png" alt="Astronaut" />
      </main>
    </>
  )
}