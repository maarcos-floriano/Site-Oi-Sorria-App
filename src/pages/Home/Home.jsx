import Navbar from '../../components/Navbar/Navbar';
import Introduction from '../Sections/Introduction/Introduction';
import ProcedureList from '../Sections/ProcedureList/ProcedureList';
import DentalProcedures from '../Sections/DentalProcedures/DentalProcedures';
import TeamSection from '../Sections/TeamSection/TeamSection';
import AgendarConsulta from '../Sections/AgendarConsulta/AgendarConsulta';
import style from './Home.module.css';
import Footer from '../Sections/Footer/Footer';

const Home = () => {
  return (
    <div className={style['home']}>
      <Navbar/>
      <section id="introduction">
        <Introduction/>
      </section>
      <section id="procedure-list">
        <ProcedureList />
      </section>
      <section id="dental-procedures">
        <DentalProcedures />
      </section>
      <section id="team-section">
        <TeamSection />
      </section>
      <section id="agendar-consulta">
        <AgendarConsulta />
      </section>
      <Footer />
    </div>
  );
};

export default Home;