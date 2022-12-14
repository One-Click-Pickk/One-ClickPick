import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './Navbar component/NavBar'
import ProSlides from './ProSlides'
import SlidesWomen from './SlidesWomen'

export default function Home() {
  return (
    <div>
      <Head>
        <title>One-Click-Pick</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header> <NavBar/> </header>


      <main className={styles.main}>
         <h1 id="forHer"> For her </h1>
            <SlidesWomen/>
        <br/> <br/> <br/> <br/> <br/><br/>
            <ProSlides/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by</span>
          <span >
            <Image src="/One Click Pick png.png" alt="Vercel Logo" width={200} height={200} />
          </span>
        </a>
      </footer>
    </div>
  );
}