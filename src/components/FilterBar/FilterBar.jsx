import { useDispatch, useSelector } from "react-redux";
import { setLocation, setForm, toggleFeature } from "../../redux/filters/slice";
import { HiMapPin } from "react-icons/hi2";
import css from "./FilterBar.module.css";
import clsx from "clsx";

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const equipment = [
    { id: "AC", label: "AC" },
    { id: "kitchen", label: "Kitchen" },
    { id: "TV", label: "TV" },
    { id: "bathroom", label: "Bathroom" }
  ];

  return (
    <div className={css.wrapper}>
      <div className={css.locationSection}>
        <label className={css.label}>Location</label>
        <div className={css.inputGroup}>
          <HiMapPin className={css.iconMap} />
          <input 
            type="text" 
            placeholder="City, Country"
            value={filters.location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
            className={css.input}
          />
        </div>
      </div>

      <p className={css.filterTitle}>Filters</p>
      
      <div className={css.section}>
        <h3 className={css.subTitle}>Vehicle equipment</h3>
        <div className={css.grid}>
          {equipment.map(item => (
            <button
              key={item.id}
              className={clsx(css.filterBtn, filters.features[item.id] && css.active)}
              onClick={() => dispatch(toggleFeature(item.id))}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className={css.section}>
        <h3 className={css.subTitle}>Vehicle type</h3>
        <div className={css.grid}>
          {["van", "fullyIntegrated", "alcove"].map(type => (
            <button
              key={type}
              className={clsx(css.filterBtn, filters.form === type && css.active)}
              onClick={() => dispatch(setForm(type))}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;