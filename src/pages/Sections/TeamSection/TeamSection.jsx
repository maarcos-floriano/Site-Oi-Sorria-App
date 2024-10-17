import React, { useState } from 'react';
import TeamMember from '../../../components/TeamMember/TeamMember';
import styles from './TeamSection.module.css';
import dentista from '../../../utils/assets/dentist.png';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: dentista, // Replace with actual image path
      name: 'DRA. YEDA UYEMA',
      description: 'Especialista em clínica geral, Dra. Yeda cuida da sua saúde bucal com atendimento humanizado e atenção aos detalhes.'
    },
    {
        id: 2,
        image: dentista, // Replace with actual image path
        name: 'DRA. RAISSA UYEMA',
        description: 'Especialista em clínica geral, Dra. Yeda cuida da sua saúde bucal com atendimento humanizado e atenção aos detalhes.'
    },
    {
        id: 3,
        image: dentista, // Replace with actual image path
        name: 'DR. TSU UYEMA',
        description: 'Especialista em clínica geral, Dra. Yeda cuida da sua saúde bucal com atendimento humanizado e atenção aos detalhes.'
    },
    {
        id: 4,
        image: dentista, // Replace with actual image path
        name: 'DR. RODRIGO',
        description: 'Especialista em clínica geral, Dra. Yeda cuida da sua saúde bucal com atendimento humanizado e atenção aos detalhes.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>EQUIPE</h2>
      <div className={styles.carouselContainer}>
        <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide}>
          &lt;
        </button>
        <div className={styles.carousel}>
          {teamMembers.slice(currentIndex, currentIndex + 3).map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </div>
        <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default TeamSection;