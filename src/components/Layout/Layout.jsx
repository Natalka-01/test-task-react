import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <div className={css.logo}>Travel<span>Trucks</span></div>
          <div className={css.links}>
            <NavLink to="/" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Home</NavLink>
            <NavLink to="/catalog" className={({ isActive }) => clsx(css.link, isActive && css.active)}>Catalog</NavLink>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;