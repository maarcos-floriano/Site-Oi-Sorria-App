import style from './DentalProcedures.module.css';
import afro from '../../../utils/assets/afro.png';

const DentalProcedures = () => {
  return (
    <section className={style['dental-procedures']}>
      <div className={style['image-container']}>
        <img src={afro} alt="Placeholder" className={style['image']} />
      </div>
      <div className={style['text-container']}>
        <h2>Procedimentos Odontológicos</h2>
        <p>
          Cuidamos da sua saúde bucal com limpezas, tratamentos de cáries, clareamentos,
          restaurações e implantes. Garantimos conforto e qualidade, seja para prevenção ou tratamento.
        </p>
        <button className={style['learn-more-button']}>SAIBA MAIS</button>
      </div>
    </section>
  );
};

export default DentalProcedures;