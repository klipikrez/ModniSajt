import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import Logo from "../media/logo.png";

function Navigation(params) {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/jewelry">Nakit</Link>
          </li>
          <li>
            <a className={classes.dropdownParent}>
              <div className={classes.odeca}>
                <div>Odeća</div>
              </div>
              <div className={classes.dropdown}>
                <Link to="/menswear" className={classes.man}>
                  Muška
                </Link>
                <Link to="/womenswear" className={classes.woman}>
                  Ženska
                </Link>
              </div>
            </a>
          </li>
          <li className={classes.specialButton}>
            <Link to="/">
              <p className={classes.logo}>Bob</p>
            </Link>
          </li>
          <li>
            <Link to="/news">Novosti</Link>
          </li>
          <li>
            <Link to="/about">O nas</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
