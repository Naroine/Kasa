import React from "react";
import { useState } from "react";
import Vector from "../../assets/Vector.svg";
import "./collapse.css";

export default function Collapse(props) {
  const [display, setDisplay] = useState("none");
  const [isActive, setIsActive] = useState("");
  const [rotate, setRotate] = useState("180deg");

  function inputCollapse() {
    setIsActive(isActive === "" ? "active" : "");
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
    setDisplay(display === "block" ? "none" : "block");
  }

  return (
    <div>
      <div className="collapse-block" onClick={inputCollapse}>
        <h1 id="title">{props.title}</h1>
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ rotate: `${rotate}` }}
            alt="chevron"
          />
        </button>
      </div>
      <div
        className={`texte ${isActive}`}
        key={props.id}
        style={{ display: `${display}` }}
      >
        {props.texte}
      </div>
    </div>
  );
}
