import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./BookingForm.module.css";

const BookingForm = () => {
  return (
    <div className={css.container}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{ name: "", email: "", date: "", comment: "" }}
        onSubmit={(values, { resetForm }) => {
          toast.success("Booking successful!");
          resetForm();
        }}
      >
        <Form className={css.form}>
          <Field name="name" placeholder="Name*" required />
          <Field name="email" type="email" placeholder="Email*" required />
          <Field name="date" type="date" placeholder="Booking date*" required />
          <Field name="comment" as="textarea" placeholder="Comment" />
          <button type="submit">Send</button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
};

export default BookingForm;