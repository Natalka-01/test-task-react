import Header from "../Header/Header";
import css from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={css.appWrapper}>
      <Header />
      <main className={css.mainContent}>
        {children}
      </main>
    </div>
  );
};

export default Layout;