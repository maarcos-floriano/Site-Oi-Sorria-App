import React from 'react';
import ProcedureStep from '../../../components/ProcedureStep/ProcedureStep';
import styles from './ProcedureList.module.css';

const ProcedureList = () => {
  const steps = [
    { id: 1, title: 'Client Design Consultation', icon: '💬', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Prototyping Home Design', icon: '🦷', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Processing to Design Home', icon: '🏠', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className={styles.procedureListContainer}>
      <h2 className={styles.sectionTitle}>Nosso Procedimento de Trabalho</h2>
      <div className={styles.steps}>
        {steps.map(step => (
          <ProcedureStep key={step.id} title={step.title} icon={step.icon} description={step.description} />
        ))}
      </div>
    </section>
  );
};

export default ProcedureList;