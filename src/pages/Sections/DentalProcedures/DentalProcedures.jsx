import style from './DentalProcedures.module.css';
import afro from '../../../utils/assets/afro.png';
import { useNavigate } from 'react-router-dom';

const DentalProcedures = ({ id, pagina }) => {
  const navigate = useNavigate();

  const takeDashboard = () => {
    navigate('#team-section'); 
  };

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
        <a href="#team-section">
        <button className={style['learn-more-button']}  onClick={takeDashboard}>Saiba Mais</button>
        </a>
      </div>
    </section>
  );
};

export default DentalProcedures;