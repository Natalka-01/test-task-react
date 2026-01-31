import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  // Функція для створення масиву зірочок (жовтих та сірих)
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? css.starYellow : css.starGray}
      />
    ));
  };

  if (!reviews || reviews.length === 0) {
    return <p className={css.noReviews}>No reviews yet for this camper.</p>;
  }

  return (
    <ul className={css.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index} className={css.reviewItem}>
          <div className={css.header}>
            {/* Перша літера імені як аватар */}
            <div className={css.avatar}>
              {review.reviewer_name.charAt(0).toUpperCase()}
            </div>
            <div className={css.info}>
              <p className={css.name}>{review.reviewer_name}</p>
              <div className={css.stars}>
                {renderStars(review.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

// ЦЕЙ РЯДОК ВИПРАВЛЯЄ ПОМИЛКУ SYNTAXERROR
export default Reviews;