// import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../../img/homepage/logo.svg";

import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (e) => {
    if (window.innerWidth < 767.98) {
      setIsOpen((open) => !open);
      document.body.classList.toggle("lock");
    }
  };
  return (
    <header className="header">
      <div className="header__body">
        <div className="header__main">
          <Link to="/" className="header__logo">
            <img src={Logo} alt="логотип" />
            <span className="header__logo-text">SUPPORT GROUP</span>
          </Link>
          <div className={`header__menu${isOpen ? " menu-open" : ""}`}>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <Link
                    to="/#advantages"
                    className="menu__link"
                    onClick={toggleMenu}
                  >
                    почему мы?
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/#services"
                    className="menu__link"
                    onClick={toggleMenu}
                  >
                    наш сервис
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/#direction"
                    className="menu__link"
                    onClick={toggleMenu}
                  >
                    направления
                  </Link>
                </li>
                <li className="menu__item">
                  <Link
                    to="/#steps"
                    className="menu__link"
                    onClick={toggleMenu}
                  >
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
        <div
          className={`header__burger${isOpen ? " active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
