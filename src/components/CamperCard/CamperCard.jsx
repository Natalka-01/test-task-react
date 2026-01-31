import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // 1. Додаємо імпорт
import { toggleFavorite } from "../../redux/campers/slice";
import { FaHeart, FaStar } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 2. Ініціалізуємо навігацію
  
  const favorites = useSelector(state => state.campers.favorites);
  const isFavorite = favorites.includes(camper.id);

  const price = `€${camper.price.toFixed(2).replace(".", ",")}`;

  // 3. Функція для переходу в тій же вкладці
  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <div className={css.card}>
      <img src={camper.gallery[0].thumb} alt={camper.name} className={css.img} />
      <div className={css.info}>
        <div className={css.header}>
          <h2>{camper.name}</h2>
          <div className={css.priceLine}>
            <span>{price}</span>
            <button onClick={() => dispatch(toggleFavorite(camper.id))} className={css.favBtn}>
              <FaHeart className={isFavorite ? css.heartRed : css.heartEmpty} />
            </button>
          </div>
        </div>
        <div className={css.meta}>
          <span><FaStar className={css.star} /> {camper.rating} ({camper.reviews.length} Reviews)</span>
          <span><HiOutlineMapPin /> {camper.location}</span>
        </div>
        <p className={css.desc}>{camper.description}</p>
        
        {/* Викликаємо handleShowMore замість window.open */}
        <button className={css.btn} onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default CamperCard;