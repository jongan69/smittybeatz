import Head from 'next/head'
import Landing from '../components/Landing'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Particles from 'react-tsparticles'
import { loadSnowPreset } from "tsparticles-preset-snow";

export default function Home() {
  return (
    <div className={styles.background}>
      <Head>
        <title>Smitty Beats</title>
        <meta name="description" content="Smitty Beatz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
