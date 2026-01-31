import CamperCard from "../CamperCard/CamperCard";
import css from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  // Якщо масив порожній, нічого не рендеримо
  if (!campers || campers.length === 0) return null;

  return (
    <ul className={css.list}>
      {campers.map((camper) => (
        <li key={camper.id} className={css.item}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;