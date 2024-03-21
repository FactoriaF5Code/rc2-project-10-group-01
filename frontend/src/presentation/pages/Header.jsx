import './Header.css'; 
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="titleRuralFit">Rural Fit</h1>
      </Link>
      <p className="sloganBlack">COSECHANDO CUERPO Y MENTE</p>
    </div>
  );
};

