import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFavorite } from "../../redux/campers/slice";
import { FaHeart, FaStar } from "react-icons/fa";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const formattedPrice = `€${camper.price.toFixed(2).replace(".", ",")}`;

  return (
    <div className={css.card}>
      <img src={camper.gallery[0].thumb} alt={camper.name} className={css.image} />
      <div className={css.info}>
        <div className={css.header}>
          <h3>{camper.name}</h3>
          <div className={css.priceBlock}>
            <span>{formattedPrice}</span>
            <button 
              onClick={() => dispatch(toggleFavorite(camper.id))}
              className={isFavorite ? css.favActive : css.favBtn}
            >
              <FaHeart />
            </button>
          </div>
        </div>
        <p>{camper.description}</p>
        <Link to={`/catalog/${camper.id}`} target="_blank" className={css.btn}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;