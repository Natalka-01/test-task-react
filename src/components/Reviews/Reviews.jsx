import { FaStar } from "react-icons/fa";
import css from "./Reviews.module.css";

const Reviews = ({ reviews }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FaStar key={i} color={i < rating ? "#FFC531" : "#F2F4F7"} />
    ));
  };

  return (
    <ul className={css.list}>
      {reviews.map((rev, idx) => (
        <li key={idx} className={css.item}>
          <div className={css.user}>
            <div className={css.avatar}>{rev.reviewer_name[0]}</div>
            <div>
              <p className={css.name}>{rev.reviewer_name}</p>
              <div>{renderStars(rev.reviewer_rating)}</div>
            </div>
          </div>
          <p className={css.comment}>{rev.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;