import React from 'react';
import styles from './AgendarConsulta.module.css';
import chat from '../../../utils/assets/chat.png';

const AgendarConsulta = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>AGENDE SUA CONSULTA</h2>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>
            <h4 className={styles.subTitle}>Nome</h4>
            <input type="text" placeholder="Nome" className={styles.input} />
          </label>
          <label>
            <h4 className={styles.subTitle}>E-mail</h4>
            <input type="email" placeholder="E-mail" className={styles.input} />
          </label>
          <label>
            <h4 className={styles.subTitle}>CPF</h4>
            <input type="text" placeholder="CPF" className={styles.input} />
          </label>
          <label>
            <h4 className={styles.subTitle}>Mensagem</h4>
            <textarea placeholder="Mensagem" className={styles.textarea}></textarea>
          </label>
          <button type="submit" className={styles.submitButton}>enviar</button>
        </form>

        <div className={styles.contactSection}>
          <div className={styles.contactResume}>
            <h3 className={styles.contactTitle}>CONTATO</h3>
            <p>Preencha seus dados e deixe uma mensagem com suas preferências. Nossa equipe retornará em breve para confirmar sua consulta.</p>
          </div>

          <div className={styles.contactRow}>
            <div className={styles.contactItem}>
              <img src={chat} alt="Telefone" className={styles.icon} />
              <div>
                <h4>TELEFONE</h4>
                <p>+55 11 95582-9675</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <img src={chat} alt="E-mail" className={styles.icon} />
              <div>
                <h4>E-MAIL</h4>
                <p>oisorria@gmail.com</p>
              </div>
            </div>
          </div>

          <div className={styles.contactItem}>
            <img src={chat} alt="Endereço" className={styles.icon} />
            <div>
              <h4>ENDEREÇO</h4>
              <p>R. Piedade, 441 - Jardim Santa Brigida</p>
            </div>
          </div>

          <div className={styles.socialMediaSection}>
            <h3 className={styles.socialTitle}>Redes Sociais</h3>
            <div className={styles.socialMedia}>
              <img src={chat} alt="Redes Sociais" className={styles.icon} />
              <img src={chat} alt="Redes Sociais" className={styles.icon} />
              <img src={chat} alt="Redes Sociais" className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendarConsulta;