// Замість PiTv використовуємо PiTelevision
import { PiWind, PiShower, PiBowlFood, PiTelevision, PiRadio } from "react-icons/pi";
import { TbAutomaticGearbox, TbEngine } from "react-icons/tb";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  // Оновлюємо масив категорій, щоб використовувати правильну іконку телевізора
  const categories = [
    { key: "transmission", label: camper.transmission, icon: <TbAutomaticGearbox /> },
    { key: "engine", label: camper.engine, icon: <TbEngine /> },
    { key: "AC", label: "AC", icon: <PiWind /> },
    { key: "bathroom", label: "Bathroom", icon: <PiShower /> },
    { key: "kitchen", label: "Kitchen", icon: <PiBowlFood /> },
    { key: "TV", label: "TV", icon: <PiTelevision /> }, // Виправлено тут
    { key: "radio", label: "Radio", icon: <PiRadio /> },
  ];

  return (
    <div className={css.container}>
      <ul className={css.badges}>
        {categories.map(item => camper[item.key] && (
          <li key={item.key} className={css.badge}>
            {item.icon} <span>{item.label}</span>
          </li>
        ))}
      </ul>
      
      <div className={css.details}>
        <h3 className={css.title}>Vehicle details</h3>
        <ul className={css.detailsList}>
          <li className={css.detailItem}><span>Form</span><span>{camper.form}</span></li>
          <li className={css.detailItem}><span>Length</span><span>{camper.length}</span></li>
          <li className={css.detailItem}><span>Width</span><span>{camper.width}</span></li>
          <li className={css.detailItem}><span>Height</span><span>{camper.height}</span></li>
          <li className={css.detailItem}><span>Tank</span><span>{camper.tank}</span></li>
          <li className={css.detailItem}><span>Consumption</span><span>{camper.consumption}</span></li>
        </ul>
      </div>
    </div>
  );
};

export default Features;