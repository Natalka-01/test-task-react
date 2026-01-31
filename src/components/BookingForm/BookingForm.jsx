import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast, { Toaster } from "react-hot-toast";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  const [date, setDate] = useState(null);

  const handleSend = (e) => {
    e.preventDefault();
    toast.success("Camper booked successfully!");
    e.target.reset();
    setDate(null);
  };

  return (
    <div className={css.formWrapper}>
      <Toaster position="top-right" />
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.sub}>Stay connected! We are always ready to help you.</p>
      <form className={css.form} onSubmit={handleSend}>
        <input type="text" placeholder="Name*" required className={css.input} />
        <input type="email" placeholder="Email*" required className={css.input} />
        <DatePicker
          selected={date}
          onChange={(d) => setDate(d)}
          placeholderText="Booking date*"
          className={css.input}
          required
        />
        <textarea placeholder="Comment" rows="4" className={css.textarea} />
        <button type="submit" className={css.submitBtn}>Send</button>
      </form>
    </div>
  );
};

export default BookingForm;