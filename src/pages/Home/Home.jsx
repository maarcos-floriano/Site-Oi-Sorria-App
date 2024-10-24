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
      <Introduction/>
      <ProcedureList />
      <DentalProcedures />
      <TeamSection />
      <AgendarConsulta />
      <Footer />
    </div>
  );
};

export default Home;