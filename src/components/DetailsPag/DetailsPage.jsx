import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { HiOutlineMapPin } from "react-icons/hi2";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import Loader from "../../components/Loader/Loader";
import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`)
      .then(res => setCamper(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!camper) return <Loader />;

  return (
    <section className={css.section}>
      <div className={css.container}>
        {/* Заголовок та ціна */}
        <h1 className={css.name}>{camper.name}</h1>
        <div className={css.meta}>
          <span className={css.rating}>
            <FaStar className={css.starIcon} /> 
            {camper.rating}({camper.reviews.length} Reviews)
          </span>
          <span className={css.location}>
            <HiOutlineMapPin /> {camper.location}
          </span>
        </div>
        <p className={css.price}>€{Number(camper.price).toFixed(2)}</p>

        {/* Галерея - 4 фото в ряд */}
        <ul className={css.gallery}>
          {camper.gallery.map((img, index) => (
            <li key={index} className={css.galleryItem}>
              <img src={img.original} alt={camper.name} />
            </li>
          ))}
        </ul>

        <p className={css.description}>{camper.description}</p>

        {/* Таби */}
        <div className={css.tabs}>
          <button 
            className={activeTab === "features" ? css.activeTab : css.tab} 
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button 
            className={activeTab === "reviews" ? css.activeTab : css.tab} 
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        {/* Нижня секція: Контент (ліворуч) + Форма (праворуч) */}
        <div className={css.bottomContent}>
          <div className={css.tabPanel}>
            {activeTab === "features" ? <Features camper={camper} /> : <Reviews reviews={camper.reviews} />}
          </div>
          <aside className={css.bookingForm}>
            <BookingForm />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;