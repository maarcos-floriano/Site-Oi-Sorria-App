import style from './DentalProcedures.module.css';
import afro from '../../../utils/assets/afro.png';

const DentalProcedures = ({ id }) => {
  return (
    <section className={style['dental-procedures']} id={id}>
      <div className={style['image-container']}>
        <img src={afro} alt="Placeholder" className={style['image']} />
      </div>
      <div className={style['text-container']}>
        <h2>Procedimentos Odontológicos</h2>
        <p>
          Na Oi, Sorria, cuidamos do seu sorriso com tratamentos modernos e confortáveis: <br/>Limpeza, clareamento,
          restaurações, implantes e mais.  <br/> <br/>Confie em nossa equipe para garantir a melhor saúde e estética para
          seu sorriso.
        </p>
        <button className={style['learn-more-button']} style={{ border: '1px solid #0455BF' }}>Saiba Mais</button>
      </div>
    </section>
  );
};

export default DentalProcedures;