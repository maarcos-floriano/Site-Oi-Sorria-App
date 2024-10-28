import React, { useState } from 'react';
import style from './Navbar.module.css';
import logo from '../../utils/assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbarLogo}>
        <img src={logo} alt="logo" />
        <h1>Oi, Sorria!</h1>
      </div>

      <ul className={`${style.navbarLinks} ${isMobileMenuOpen ? style.active : ''}`}>
        <li><a href="#introduction">Home</a></li>
        <li><a href="#procedure-list">Nossos Procedimentos</a></li>
        <li><a href="#dental-procedures">Procedimentos Odontológicos</a></li>
        <li><a href="#team-section">Nossa Equipe</a></li>
        <li><a href="#agendar-consulta">Agende Sua Consulta</a></li>
      </ul>


      <button className={style.navbarButton}>
        Entre em Contato
      </button>

      {/* Ícone de menu hambúrguer para dispositivos móveis */}
      <div className={style.hamburger} onClick={toggleMobileMenu}>
        <span className={isMobileMenuOpen ? style.active : ''}></span>
        <span className={isMobileMenuOpen ? style.active : ''}></span>
        <span className={isMobileMenuOpen ? style.active : ''}></span>
      </div>
    </nav>
  );
};

export default Navbar;