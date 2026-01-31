import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        {/* Логотип як посилання на головну */}
        <Link to="/" className={css.logo}>
          Travel<span className={css.logoAccent}>Trucks</span>
        </Link>

        <nav className={css.nav}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? css.active : css.link}
          >
            Home
          </NavLink>
          <NavLink 
            to="/catalog" 
            className={({ isActive }) => isActive ? css.active : css.link}
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;