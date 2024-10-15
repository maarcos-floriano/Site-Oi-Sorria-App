import React from 'react';
import styles from "./Introduction.module.css";
import logo from "../../../utils/assets/logo.png";
import Container from "@mui/material/Container";

const Introduction = () => {
  return (
    <section className={styles.heroContainer}>
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
