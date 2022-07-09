import styles from '../styles/Home.module.css'
import React from "react";
import Particles from 'react-tsparticles'
import { loadSnowPreset } from "tsparticles-preset-snow";

class Landing extends React.Component {
  render() {
  return (
    <div>
    <main className={styles.main}>
        <h1 className={styles.title}>
          Smitty Beatz
        </h1>
        <p className={styles.description}>
         Welcome to the studio{' '}
          <br></br>
          <button className={styles.code}>Enter</button>
        </p>
    </main>
    <Particles id="tsparticles" options={{
        preset: "snow",
        fullScreen: {
          zIndex: -1
        }
      }} init={async (engine) => await loadSnowPreset(engine)} />
    </div>
  )
}
}

export default Landing;
