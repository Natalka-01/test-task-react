import { TbAutomaticGearbox, TbEngine } from "react-icons/tb";
import { PiWind, PiShower, PiBowlFood, PiTv, PiRadio } from "react-icons/pi";
import css from "./Features.module.css";

const Features = ({ camper }) => (
  <div className={css.container}>
    <ul className={css.chips}>
      <li className={css.chip}><TbAutomaticGearbox /> {camper.transmission}</li>
      <li className={css.chip}><TbEngine /> {camper.engine}</li>
      {camper.AC && <li className={css.chip}><PiWind /> AC</li>}
      {camper.kitchen && <li className={css.chip}><PiBowlFood /> Kitchen</li>}
      {camper.bathroom && <li className={css.chip}><PiShower /> Bathroom</li>}
      {camper.TV && <li className={css.chip}><PiTv /> TV</li>}
      {camper.radio && <li className={css.chip}><PiRadio /> Radio</li>}
    </ul>
    
    <div className={css.details}>
      <h3 className={css.title}>Vehicle details</h3>
      <ul className={css.detailsList}>
        <li><span>Form</span><span>{camper.form}</span></li>
        <li><span>Length</span><span>{camper.length}</span></li>
        <li><span>Width</span><span>{camper.width}</span></li>
        <li><span>Height</span><span>{camper.height}</span></li>
        <li><span>Tank</span><span>{camper.tank}</span></li>
        <li><span>Consumption</span><span>{camper.consumption}</span></li>
      </ul>
    </div>
  </div>
);

export default Features;