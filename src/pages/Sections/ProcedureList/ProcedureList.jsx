import React from 'react';
import ProcedureStep from '../../../components/ProcedureStep/ProcedureStep';
import styles from './ProcedureList.module.css';
import chat from "../../../utils/assets/chat.png";
import tooth from "../../../utils/assets/tooth.png";
import house from "../../../utils/assets/house.png";

const ProcedureList = () => {
  const steps = [
    { id: 1, title: 'Client Design Consultation', icon: chat, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Prototyping Home Design', icon: tooth, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', highlight: true },
    { id: 3, title: 'Processing to Design Home', icon: house, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 4, title: 'Client Design Consultation', icon: chat, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 5, title: 'Prototyping Home Design', icon: tooth, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', highlight: true },
    { id: 6, title: 'Processing to Design Home', icon: house, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className={styles.procedureListContainer}>
      <h2 className={styles.sectionTitle}>
        <img src={tooth} alt="Ícone de Dente" className={styles.icon} />
        Nosso Procedimento de Trabalho
      </h2>
      <div className={styles.steps}>
        {steps.map((step) => (
          <ProcedureStep 
            key={step.id} 
            title={step.title} 
            icon={step.icon} 
            description={step.description} 
            highlight={step.highlight} 
          />
        ))}
      </div>
    </section>
  );
};

export default ProcedureList;