import { useDispatch, useSelector } from "react-redux";
import { setLocation, setForm, toggleFeature } from "../../redux/filters/slice";
import { resetItems } from "../../redux/campers/slice";
import { fetchCampers } from "../../redux/campers/operations";
import css from "./FilterBar.module.css";

const FilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const handleSearch = () => {
    dispatch(resetItems());
    dispatch(fetchCampers({ page: 1, filters }));
  };

  return (
    <aside className={css.sidebar}>
      <label className={css.label}>Location</label>
      <input 
        type="text" 
        className={css.input} 
        placeholder="City, Ukraine"
        value={filters.location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
      />

      <p className={css.filterTitle}>Filters</p>
      
      <div className={css.group}>
        <h3>Vehicle equipment</h3>
        <div className={css.iconsGrid}>
          {['AC', 'bathroom', 'kitchen', 'TV', 'radio'].map(item => (
            <button 
              key={item}
              className={filters.features[item] ? css.activeIcon : css.iconBtn}
              onClick={() => dispatch(toggleFeature(item))}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={css.group}>
        <h3>Vehicle type</h3>
        <div className={css.iconsGrid}>
          {['Van', 'Fully Integrated', 'Alcove'].map(type => (
            <button 
              key={type}
              className={filters.form === type ? css.activeIcon : css.iconBtn}
              onClick={() => dispatch(setForm(type))}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button className={css.searchBtn} onClick={handleSearch}>Search</button>
    </aside>
  );
};

export default FilterBar;