import { ImSpinner2 } from "react-icons/im";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.loader}>
        <ImSpinner2 className={css.icon} />
        <p className={css.text}>Loading campers...</p>
      </div>
    </div>
  );
};

export default Loader;