import { useNavigate } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={css.hero}>
      <div className={css.content}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <button onClick={() => navigate("/catalog")} className={css.btn}>
          View Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;