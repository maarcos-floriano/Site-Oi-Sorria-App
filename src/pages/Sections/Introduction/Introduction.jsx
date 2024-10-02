import style from "./Introduction.module.css";
import logo from "../../../utils/assets/logo.png";
import Container from "@mui/material/Container";

const Introduction = () => {
  return (
      <Container maxWidth="xl" className={style["introduction"]}>
        <img src={logo} alt="Dentista" className={style["intro__image"]} />
        <div>
          <h1 className={style["intro__title"]}>Oi, Sorria</h1>
          <p className={style["intro__description"]}>
            Uma clinica dedica para aumentar sua autoestima e melhorar sua saúde
            :)
          </p>
          <button className={style["intro__button"]}>Entre em Contato</button>
        </div>
      </Container>
  );
};

export default Introduction;
