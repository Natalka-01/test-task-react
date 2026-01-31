import { TbAutomaticGearbox, TbEngine, TbGasStation } from "react-icons/tb";
import { PiWind, PiShower, PiBowlFood, PiTelevision, PiRadio } from "react-icons/pi";
import css from "./Features.module.css";

const Features = ({ camper }) => {
  const specs = [
    { key: "transmission", label: camper.transmission, icon: <TbAutomaticGearbox /> },
    { key: "AC", label: "AC", icon: <PiWind /> },
    { key: "engine", label: camper.engine, icon: <TbEngine /> },
    { key: "kitchen", label: "Kitchen", icon: <PiBowlFood /> },
    { key: "radio", label: "Radio", icon: <PiRadio /> },
  ];

  return (
    <div className={css.wrapper}>
      <ul className={css.chips}>
        {specs.map(item => camper[item.key] && (
          <li key={item.key} className={css.chip}>
            {item.icon} <span>{item.label}</span>
          </li>
        ))}
      </ul>

      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.detailsList}>
        {["form", "length", "width", "height", "tank", "consumption"].map(key => (
          <li key={key} className={css.detailRow}>
            <span className={css.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
            <span className={css.value}>{camper[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;