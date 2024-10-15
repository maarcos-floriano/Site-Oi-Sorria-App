import React from 'react';
import styles from './ProcedureStep.module.css';

const ProcedureStep = ({ title, icon, description }) => {
  return (
    <div className={styles.step}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProcedureStep;