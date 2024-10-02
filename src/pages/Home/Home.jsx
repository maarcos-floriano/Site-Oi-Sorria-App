import Navbar from '../../components/Navbar/Navbar';
import Introduction from '../Sections/Introduction/Introduction';
import style from './Home.module.css';

const Home = () => {
  return (
    <div className={style['home']}>
      <Navbar/>
      <Introduction/>
    </div>
  );
};

export default Home;