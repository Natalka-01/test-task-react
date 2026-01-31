import { useDispatch, useSelector } from "react-redux";
import { setLocation, setForm, toggleFeature } from "../../redux/filters/slice";
import { fetchCampers } from "../../redux/campers/operations"; // Для кнопки Search
import { HiMapPin } from "react-icons/hi2";
import { PiWind, PiShower, PiBowlFood, PiTelevision } from "react-icons/pi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { BsGrid1X2, BsGrid3X3Gap, BsGrid } from "react-icons/bs"; // Іконки для типів
import css from "./FilterBar.module.css";
import clsx from "clsx";

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const equipment = [
    { id: "AC", label: "AC", icon: <PiWind className={css.btnIcon} /> },
    { id: "transmission", label: "Automatic", icon: <TbAutomaticGearbox className={css.btnIcon} /> },
    { id: "kitchen", label: "Kitchen", icon: <PiBowlFood className={css.btnIcon} /> },
    { id: "TV", label: "TV", icon: <PiTelevision className={css.btnIcon} /> },
    { id: "bathroom", label: "Bathroom", icon: <PiShower className={css.btnIcon} /> },
  ];

  const vehicleTypes = [
    { id: "panelTruck", label: "Van", icon: <BsGrid1X2 className={css.btnIcon} /> },
    { id: "fullyIntegrated", label: "Fully Integrated", icon: <BsGrid3X3Gap className={css.btnIcon} /> },
    { id: "alcove", label: "Alcove", icon: <BsGrid className={css.btnIcon} /> },
  ];

  const handleSearch = () => {
    // Викликаємо запит до API з поточними фільтрами
    dispatch(fetchCampers({ page: 1, filters }));
  };

  return (
    <div className={css.wrapper}>
      {/* Location Section */}
      <div className={css.locationSection}>
        <label className={css.label}>Location</label>
        <div className={css.inputWrapper}>
          <HiMapPin className={css.inputIcon} />
          <input
            type="text"
            placeholder="Kyiv, Ukraine"
            value={filters.location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
            className={css.input}
          />
        </div>
      </div>

      <p className={css.filterLabel}>Filters</p>

      {/* Vehicle Equipment */}
      <div className={css.section}>
        <h3 className={css.sectionTitle}>Vehicle equipment</h3>
        <div className={css.divider}></div>
        <div className={css.grid}>
          {equipment.map((item) => (
            <button
              key={item.id}
              className={clsx(
                css.filterBtn,
                filters.features[item.id] && css.active
              )}
              onClick={() => dispatch(toggleFeature(item.id))}
            >
              {item.icon}
              <span className={css.btnText}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle Type */}
      <div className={css.section}>
        <h3 className={css.sectionTitle}>Vehicle type</h3>
        <div className={css.divider}></div>
        <div className={css.grid}>
          {vehicleTypes.map((type) => (
            <button
              key={type.id}
              className={clsx(css.filterBtn, filters.form === type.id && css.active)}
              onClick={() => dispatch(setForm(type.id))}
            >
              {type.icon}
              <span className={css.btnText}>{type.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;