import logo from '../assets/logo rural fit.png'
import backgroundImage from '../assets/Group 16.png';
import './Home.css';

export const Home = () => {
  return (
    <div className="container">
      <div className="backgroundImageContainer">
        <img src={backgroundImage} alt="background" className="backgroundImage" />
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
          <p className="tagline">COSECHANDO CUERPO Y MENTE</p>
        </div>
      </div>
      <div className="bottomContent">
        <p className="question">¿Que te apetece hacer hoy?</p>
        <div className="buttonContainer">
          <button className="button">Calendario de actividades</button>
          <button className="button">Entrenamiento</button>
        </div>
      </div>
      
    </div>
  );
};

