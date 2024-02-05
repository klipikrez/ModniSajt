import classes from "./Misc.module.css";
import React, { useEffect, useState } from "react";

function Misc(params) {
  const [isVisible, setIsVisible] = useState(false);

  function toggleVisibility() {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  function ScrollUP() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={classes.misc}>
      <p>
        <h3>KONTAKTIRAJTE SAVETNIKA</h3>
        Podrška za korisnike <span className="bob">Fashion World</span> dostupna je od
        ponedeljka do nedelje, od 9 do 12 sati. 
        <br />
        <br />
        Ukoliko imate pitanja, molimo vas da nam pošaljete e-poštu, pozovete 1.800.550.0005 ili
        razgovarate uživo sa <span className="bob">Fashion World</span> savetnikom.
        <br />
        <a href="https://www.google.com/webhp?authuser=3">Email</a>
        <a href="https://www.google.com/webhp?authuser=3">Chat</a>
        <a href="https://www.google.com/webhp?authuser=3">Zovi</a>
      </p>
      <p>
        <h3>BILTEN</h3>
        Pretplatite se da primate vesti od <span className="bob">Fashion World</span>
        <br />
        <input type="texbox" placeholder="Email"></input>
      </p>
      <p>
        <h3>PRONAĐITE PRODAVNICU </h3>
        Unesite lokaciju da pronađete najbliže <span className="bob">
        Fashion World
        </span>{" "}
        prodavnice
        <input type="texbox" placeholder="Lokacija"></input>
      </p>

      {isVisible && (
        <button onClick={ScrollUP}>
          <div className={classes.arrow} />
        </button>
      )}
    </div>
  );
}

export default Misc;
