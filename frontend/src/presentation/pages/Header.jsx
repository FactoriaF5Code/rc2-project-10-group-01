import "./Header.css";
import { Link } from "react-router-dom";
import backHomeButton from "../assets/backHome.svg";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <button className="backHomeButton">
          <img src={backHomeButton} alt="" />
        </button>
      </Link>
      <div className="logoHeader">
        <Link to="/">
          <h1 className="titleRuralFit">Rural Fit</h1>
        </Link>
        <p className="sloganBlack">COSECHANDO CUERPO Y MENTE</p>
      </div>
    </div>
  );
};
