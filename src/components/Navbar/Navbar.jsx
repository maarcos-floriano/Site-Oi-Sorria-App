import style from "./Navbar.module.css";
import logo from '../../utils/assets/logo.png'

const Navbar = () => {
  return (
    <nav className={style['navbar']}>
      
      <div className={style['navbar__logo']}>
        <img src={logo} alt="logo"/>
        <h1>OI, SORRIA</h1>
      </div>

        <ul className={style['navbar__links']}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Our Projects</a></li>
        </ul>

        <button className={style['navbar__button']}>
            Entre em Contato
        </button>

    </nav>
  );
};

export default Navbar;
