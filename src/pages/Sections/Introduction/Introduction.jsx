import React from 'react';
import styles from "./Introduction.module.css";
import logo from "../../../utils/assets/logo.png";

const Introduction = () => {
  return (
    <section className={styles.heroContainer}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <div className={styles.content}>
        <h1 className={styles.title}>Oi, Sorria</h1>
        <p className={styles.description}>
          Uma clínica dedicada para aumentar sua autoestima e melhorar sua saúde :)
        </p>
        <button className={styles.button}>Saiba Mais</button>
      </div>
    </section>
  );
};

export default Introduction;
