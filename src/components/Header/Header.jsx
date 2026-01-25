import { NavLink, Link } from "react-router-dom";
import clsx from "clsx"; // Бібліотека для зручного поєднання класів (npm install clsx)
import css from "./Header.module.css";

const Header = () => {
  // Функція для стилізації активного посилання
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* Логотип завжди веде на головну */}
        <Link to="/" className={css.logo}>
          <span className={css.logoTravel}>Travel</span>
          <span className={css.logoTrucks}>Trucks</span>
        </Link>

        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;