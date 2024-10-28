import React, { useState } from 'react';
import styles from './AgendarConsulta.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const AgendarConsulta = ({ id }) => {
  return (
    <section className={styles.container} id={id}>
      <h2 className={styles.title}>Agende Sua Consulta</h2>

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={saveFields}>
          <label>
            <h4 className={styles.subTitle}>Nome</h4>
            <input type="text" placeholder="Nome" id='name' className={styles.input} />
          </label>
          <label>
            <h4 className={styles.subTitle}>E-mail</h4>
            <input type="email" placeholder="E-mail" id='email' className={styles.input} />
          </label>
          <label>
            <h4 className={styles.subTitle}>CPF</h4>
            <input type="text" placeholder="CPF" id='cpf' className={styles.input} />
          </label>
          <label>
            <h4 className={styles.subTitle}>Mensagem</h4>
            <textarea placeholder="Mensagem" id='mensagem' className={styles.textarea}></textarea>
          </label>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>

        <div className={styles.contactSection}>
          <div className={styles.contactResume}>
            <h3 className={styles.contactTitle}>CONTATO</h3>
            <p>Preencha seus dados e deixe uma mensagem com suas preferências. Nossa equipe retornará em breve para confirmar sua consulta.</p>
          </div>

          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faPhone} className={styles.icon} />
              <div>
                <h4>TELEFONE</h4>
                <p>+55 11 95582-9675</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              <div>
                <h4>E-MAIL</h4>
                <p>oisorria@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
              <div>
                <h4>ENDEREÇO</h4>
                <p>R. Piedade, 441 - Jardim Santa Brigida</p>
              </div>
            </div>
          </div>

          <div className={styles.socialMediaSection}>
            <h3 className={styles.socialTitle}>Redes Sociais</h3>
            <div className={styles.socialMedia}>
              <a href="#"><FontAwesomeIcon icon={faFacebook} className={styles.icon} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} className={styles.icon} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function saveFields(value){
    value.preventDefault();
    const formElements = value.target.elements;
    const nameForm = formElements.name.value;
    const emailForm = formElements.email.value;
    const cpfForm = formElements.cpf.value;
    const mensagemForm = formElements.mensagem.value;

    const texto = `Olá, meu nome é ${nameForm}.\nEmail: ${emailForm}\nMensagem: ${mensagemForm}`;
    const numeroWhatsApp = "+5511955829675";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  }
};

export default AgendarConsulta;