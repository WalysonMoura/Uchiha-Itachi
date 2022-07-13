// ============= CSS ===============
import "./style.css";

// =========== IMAGENS =============
import nuvem from "./img/nuvem.png";

export function Menu() {
  return (
    <header className="l-header">
      <nav className="c-navbar">
        <img className="c-navbar__logo" src={nuvem} />

        <ul className="c-navbar__menu-list">
          <li className="c-navbar__menu-item">Home</li>
          <li className="c-navbar__menu-item">Episódios</li>
          <li className="c-navbar__menu-item">Filmes</li>
        </ul>

        <div className="c-navbar__btn--menu">
          <i className="c-navbar__icon bx bx-menu-alt-right"></i>
        </div>

      </nav>
    </header>
  );
}
