import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrapper}>
      {/* Використовуємо червоний колір бренду #E44848 */}
      <RotatingLines
        strokeColor="#E44848"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </div>
  );
};

// Цей рядок виправляє SyntaxError у App.jsx
export default Loader;