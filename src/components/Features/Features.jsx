import { 
  FaWind, 
  FaShower, 
  FaUtensils, 
  FaTv, 
  FaGasPump, 
  FaWater 
} from "react-icons/fa";
import { IoRadioOutline } from "react-icons/io5"; // Виправлена іконка радіо
import { TbAutomaticGearbox, TbEngine } from "react-icons/tb";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  if (!camper) return null;

  // Функція для форматування тексту (напр. "van" -> "Van")
  const formatValue = (text) => {
    if (!text) return "";
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <div className={css.container}>
      {/* Секція іконок (Chips) */}
      <ul className={css.chipsList}>
        <li className={css.chip}>
          <TbAutomaticGearbox className={css.icon} />
          <span>{formatValue(camper.transmission)}</span>
        </li>
        <li className={css.chip}>
          <TbEngine className={css.icon} />
          <span>{formatValue(camper.engine)}</span>
        </li>
        {camper.AC && (
          <li className={css.chip}>
            <FaWind className={css.icon} /> <span>AC</span>
          </li>
        )}
        {camper.bathroom && (
          <li className={css.chip}>
            <FaShower className={css.icon} /> <span>Bathroom</span>
          </li>
        )}
        {camper.kitchen && (
          <li className={css.chip}>
            <FaUtensils className={css.icon} /> <span>Kitchen</span>
          </li>
        )}
        {camper.TV && (
          <li className={css.chip}>
            <FaTv className={css.icon} /> <span>TV</span>
          </li>
        )}
        {camper.radio && (
          <li className={css.chip}>
            <IoRadioOutline className={css.icon} /> <span>Radio</span>
          </li>
        )}
        {camper.gas && (
          <li className={css.chip}>
            <FaGasPump className={css.icon} /> <span>Gas</span>
          </li>
        )}
        {camper.water && (
          <li className={css.chip}>
            <FaWater className={css.icon} /> <span>Water</span>
          </li>
        )}
      </ul>

      {/* Секція технічних характеристик */}
      <div className={css.details}>
        <h3 className={css.detailsTitle}>Vehicle details</h3>
        <ul className={css.detailsList}>
          <li className={css.detailsItem}>
            <span>Form</span>
            <span>{formatValue(camper.form)}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Length</span>
            <span>{camper.length}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Width</span>
            <span>{camper.width}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Height</span>
            <span>{camper.height}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </li>
          <li className={css.detailsItem}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;