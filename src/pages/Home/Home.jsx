import Navbar from '../../components/Navbar/Navbar';
import Introduction from '../Sections/Introduction/Introduction';
import ProcedureList from '../Sections/ProcedureList/ProcedureList';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style['home']}>
      <Navbar/>
      <Introduction/>
      <ProcedureList />
    </div>
  );
};

export default Home;