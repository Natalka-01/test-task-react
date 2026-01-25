import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperById } from "../../redux/campers/operations";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(state => state.campers.selectedCamper);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return <div>Loading...</div>;

  return (
    <div className={css.container}>
      <h1>{camper.name}</h1>
      <div className={css.meta}>
        <span>⭐ {camper.rating}({camper.reviews.length} Reviews)</span>
        <span>📍 {camper.location}</span>
      </div>
      <p className={css.price}>€{camper.price.toFixed(2).replace(".", ",")}</p>

      <div className={css.gallery}>
        {camper.gallery.map((img, idx) => (
          <img key={idx} src={img.original} alt={camper.name} />
        ))}
      </div>

      <p className={css.description}>{camper.description}</p>

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

      <div className={css.detailsWrapper}>
        <div className={css.infoContent}>
          {activeTab === "features" ? <Features camper={camper} /> : <Reviews reviews={camper.reviews} />}
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default DetailsPage;