import React, { useState, useEffect } from 'react';
import TeamMember from '../../../components/TeamMember/TeamMember';
import styles from './TeamSection.module.css';
import dentista from '../../../utils/assets/dentist.png';

const TeamSection = () => {
  const teamMembers = [
    { id: 1, image: dentista, name: 'DRA. YEDA UYEMA', description: 'Especialista em clínica geral, Dra. Yeda Uyema se destaca pelo atendimento humanizado e atenção aos detalhes.' },
    { id: 2, image: dentista, name: 'DR. LUCAS SANTOS', description: 'Especialista em ortodontia, Dr. Lucas Santos combina tecnologia avançada com um atendimento amigável.' },
    { id: 3, image: dentista, name: 'DRA. MARIANA FERRAZ', description: 'Dra. Mariana Ferraz é especialista em endodontia, reconhecida por sua habilidade em tratamentos de canal.' },
    { id: 4, image: dentista, name: 'DR. RICARDO OLIVEIRA', description: 'Com especialização em odontopediatria, Dr. Ricardo Oliveira cria um ambiente divertido para crianças.' },
    { id: 5, image: dentista, name: 'DRA. CLAUDIA TAVARES', description: 'Dra. Claudia Tavares é especialista em implantodontia, focada em recuperar sorrisos.' },
    { id: 6, image: dentista, name: 'DR. ANDRÉ MARTINS', description: 'Especialista em periodontia, Dr. André Martins previne e trata doenças gengivais com precisão.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slidesToShow = isMobile ? 1 : 3;

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - slidesToShow ? 0 : prevIndex + 1
      );
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? teamMembers.length - slidesToShow : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className={styles.teamSection}>
      <h2 className={styles.sectionTitle}>EQUIPE</h2>
      <div className={styles.carouselContainer}>
        <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide}>&lt;</button>
        <div className={styles.carouselWrapper}>
          <div
            className={styles.carousel}
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              transition: isTransitioning ? 'transform 0.5s ease' : 'none',
            }}
          >
            {teamMembers.map((member) => (
              <div key={member.id} className={styles.teamMemberWrapper}>
                <TeamMember {...member} />
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
};

export default TeamSection;
