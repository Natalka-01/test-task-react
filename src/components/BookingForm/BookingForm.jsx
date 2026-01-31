import css from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <div className={css.card}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.sub}>Stay connected! We are always ready to help you.</p>
      <form className={css.form}>
        <input type="text" placeholder="Name*" required />
        <input type="email" placeholder="Email*" required />
        <input type="text" placeholder="Booking date*" required />
        <textarea placeholder="Comment" rows="4"></textarea>
        <button type="submit" className={css.btn}>Send</button>
      </form>
    </div>
  );
};

export default BookingForm;