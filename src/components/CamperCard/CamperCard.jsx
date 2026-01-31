import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/campers/slice";
import { FaHeart, FaStar } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const priceFormatted = camper.price.toFixed(2).replace(".", ",");

  return (
    <div className={css.card}>
      <img src={camper.gallery[0].thumb} alt={camper.name} className={css.image} />
      <div className={css.content}>
        <div className={css.header}>
          <h3>{camper.name}</h3>
          <div className={css.priceBox}>
            <p>€{priceFormatted}</p>
            <button onClick={() => dispatch(toggleFavorite(camper.id))} className={css.favBtn}>
              <FaHeart className={isFavorite ? css.heartActive : css.heart} />
            </button>
          </div>
        </div>
        <div className={css.meta}>
          <span><FaStar className={css.star} /> {camper.rating} ({camper.reviews.length} Reviews)</span>
          <span><HiOutlineMapPin /> {camper.location}</span>
        </div>
        <p className={css.desc}>{camper.description}</p>
        <button 
          className={css.mainBtn} 
          onClick={() => window.open(`/catalog/${camper.id}`, "_blank")}
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;