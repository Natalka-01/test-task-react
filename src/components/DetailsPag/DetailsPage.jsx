import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import css from "./DetailsPage.module.css";

const DetailsPage = () => {
  const { id } = useParams(); // Отримуємо ID з URL
  const [camper, setCamper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Це допоможе нам побачити в консолі, чи запустився компонент
    console.log("DetailsPage mounted with ID:", id);

    const fetchDetails = async () => {
      try {
        setLoading(true);
        console.log("Sending request to API...");
        
        const { data } = await axios.get(`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`);
        
        console.log("Data received:", data);
        setCamper(data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  if (loading) return <Loader />;
  
  if (!camper) return (
    <div style={{ padding: "100px", textAlign: "center" }}>
      <h2>Кемпер не знайдений або сталася помилка запиту.</h2>
      <p>Перевір консоль (F12) та вкладку Network.</p>
    </div>
  );

  return (
    <div className={css.container}>
      <h1>{camper.name}</h1>
      <p className={css.price}>€{Number(camper.price).toFixed(2).replace(".", ",")}</p>
      
      <div className={css.gallery}>
        {camper.gallery.map((img, index) => (
          <img key={index} src={img.original} alt={camper.name} className={css.img} />
        ))}
      </div>

      <p className={css.description}>{camper.description}</p>
      
      {/* Тут будуть твої вкладки та форма */}
    </div>
  );
};

export default DetailsPage;