import React from "react";
import "../Home/Home.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imgHome from "../../assets/ImgHome.jpg";
import cardItems from "../../assets/Logements";
import { Link } from "react-router-dom";

export default function Home() {
  const AppCard = () => (
    <div className="listCard">
      {cardItems.map((item) => {
        return (
          <Link key={item.id} to={`/logement/${item.id}`}>
            <div className="card">
              <img src={item.cover} alt={item.title} />
              <b>{item.title}</b>
            </div>
          </Link>
        );
      })}
    </div>
  );
  return (
    <div>
      <Header />
      <div className="cover">
        <p>Chez vous, partout et ailleurs</p>
        <img className="imgAccueil" src={imgHome} alt="paysage" />
      </div>
      <AppCard />
      <Footer />
    </div>
  );
}
