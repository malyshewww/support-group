// import { Link } from "react-router-dom";
import Logo from "../../img/homepage/logo.svg";

import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__main">
          <Link to="/" className="header__logo">
            <img src={Logo} alt="логотип" />
            <span className="header__logo-text">SUPPORT GROUP</span>
          </Link>
          <div className="header__menu">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link to="/#advantages" className="menu__link">
                    почему мы?
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/#services" className="menu__link">
                    наш сервис
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/#direction" className="menu__link">
                    направления
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/#steps" className="menu__link">
                    этапы работы
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header__actions">
          <Link to="/" className="header__link btn">
            Контакты
          </Link>
        </div>
        <div className="header__burger">
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
