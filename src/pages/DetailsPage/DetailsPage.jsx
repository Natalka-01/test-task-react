import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import BookingForm from "../../components/BookingForm/BookingForm";
import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams();
  const [camper, setCamper] = useState(null);
  const [activeTab, setActiveTab] = useState("features");

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { data } = await axios.get(`/campers/${id}`);
        setCamper(data);
      } catch (e) { console.error(e); }
    };
    getDetails();
  }, [id]);

  if (!camper) return null;

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h1>{camper.name}</h1>
        <p>{camper.rating}({camper.reviews.length} Reviews) {camper.location}</p>
        <p className={css.price}>€{Number(camper.price).toFixed(2).replace(".", ",")}</p>
      </div>

      <div className={css.gallery}>
        {camper.gallery.map((img, index) => (
          <img key={index} src={img.original} alt={camper.name} className={css.galleryImg} />
        ))}
      </div>

      <p className={css.description}>{camper.description}</p>

      <div className={css.tabs}>
        <button onClick={() => setActiveTab("features")} className={activeTab === "features" ? css.active : ""}>Features</button>
        <button onClick={() => setActiveTab("reviews")} className={activeTab === "reviews" ? css.active : ""}>Reviews</button>
      </div>

      <div className={css.bottomSection}>
        <div className={css.tabContent}>
          {activeTab === "features" ? <Features camper={camper} /> : <Reviews reviews={camper.reviews} />}
        </div>
        <aside className={css.bookingAside}>
          <BookingForm />
        </aside>
      </div>
    </div>
  );
};

export default DetailsPage;