import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import "./Error.css";

export default function Error() {
  return (
    <div className="BodyError">
      <Header />
      <div className="blocError">
        <strong>404</strong>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </div>
  );
}
