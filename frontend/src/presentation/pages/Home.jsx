import logo from '../assets/logo rural fit.png'
import './Home.css';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="containerHome">
      <div className="backgroundImageContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
          <p className="slogan">COSECHANDO CUERPO Y MENTE</p>
        </div>
      </div>
      <div className="bottomContent">
        <p className="question">¿Que te apetece hacer hoy?</p>
        <div className="buttonContainer">
          <Link to="/activities">
              <button className="button">Calendario de actividades</button>
          </Link>
          <button className="button">Entrenamiento</button>
        </div>
      </div>
    </div>
  );
};

