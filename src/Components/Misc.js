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
        <h3>KONTAKTIRAJTE SAVJETNIKA</h3>
        Podrška za korisnike <span className="bob">Boba</span> dostupna je od
        ponedjeljka do nedjelje, od 7 do 12 sati po istočnom vremenu. da
        odgovorim na sva vaša pitanja.
        <br />
        <br />
        Molimo vas da nam pošaljete e-poštu, pozovite 1.800.550.0005 ili
        razgovarajte uživo sa <span className="bob">Bob</span> savjetnikom.
        <br />
        <a href="https://www.google.com/webhp?authuser=3">Email</a>
        <a href="https://www.google.com/webhp?authuser=3">Chat</a>
        <a href="https://www.google.com/webhp?authuser=3">Zovi</a>
      </p>
      <p>
        <h3>BILTEN</h3>
        Pretplatite se da primate vijesti od <span className="bob">Boba</span>
        <br />
        <input type="texbox" placeholder="Email"></input>
      </p>
      <p>
        <h3>PRONAĐITE PRODAVNICU :)</h3>
        Unesite lokaciju da pronađete najbliže <span className="bob">
          Bob
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
