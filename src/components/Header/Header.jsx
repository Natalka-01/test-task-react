import { NavLink, Link } from "react-router-dom";
import clsx from "clsx";
import css from "./Header.module.css";

const Header = () => {
  const getLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Link to="/" className={css.logo}>Travel<span className={css.logoRed}>Trucks</span></Link>
        <nav className={css.nav}>
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
          <NavLink to="/catalog" className={getLinkClass}>Catalog</NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;