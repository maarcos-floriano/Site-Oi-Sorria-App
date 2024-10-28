import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from "../../../utils/assets/logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3>INFORMAÇÕES</h3>
          <p>
            Estamos aqui para proporcionar uma experiência de atendimento humanizada e
            eficiente. Siga-nos nas redes sociais e acompanhe nossas novidades!
          </p>
          <div className={styles.socialIcons}>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.socialIcon} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles.socialIcon} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.socialIcon} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} /></a>
          </div>
        </div>

        <div className={styles.section} style={{ paddingLeft: '15%' }}>
          <h3>NAVEGAÇÃO</h3>
          <ul className={styles.navList}>
            <li>
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
              <a href="#introduction">Home</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
              <a href="#procedure-list">Nossos Procedimentos</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
              <a href="#dental-procedures">Procedimentos Odontológicos</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
              <a href="#team-section">Nossa Equipe</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleRight} className={styles.icon} />
              <a href="#agendar-consulta">Agende Sua Consulta</a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>CONTATO</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} className={styles.contactIcon} /> R. Piedade, 441 - Jardim Santa Brigida</p>
          <p><FontAwesomeIcon icon={faEnvelope} className={styles.contactIcon} /> <a href="mailto:oisorria@gmail.com">oisorria@gmail.com</a></p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <img src={logo} alt="Logo" />
        <p>ALL RIGHTS RESERVED - OI, SORRIA ODONTOLOGIA INTEGRADA</p>
        <div className={styles.legalLinks}>
          <a href="#">DISCLAIMER</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERM OF USE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;