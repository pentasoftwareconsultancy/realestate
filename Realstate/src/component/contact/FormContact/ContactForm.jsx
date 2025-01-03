import React from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {

  const submitData=()=>
  {
       window.alert("Backend is not conected.");
  }

  return (
    <div id="formHero" className={styles.formContainer}>
    <h2 className={styles.title}>Contact Us</h2>
<form action="/" className={styles.form}>
<div className={styles.formGroup}>
 <label htmlFor="name">Name</label>
 <input type="text" id="name" placeholder="Name" required />
</div>
<div className={styles.formGroup}>
 <label htmlFor="email">Email</label>
 <input type="email" id="email" placeholder="Email" required />
</div>
<div className={styles.formGroup}>
 <label htmlFor="number">Phone Number</label>
 <input type="tel" id="number" placeholder="Number" required />
</div>
<div className={styles.formGroup}>
 <label htmlFor="message">Message</label>
 <textarea id="message" placeholder="Write your message here" rows="5"></textarea>
</div>
<button type="submit" onClick={submitData} className={styles.submitButton}>
 Submit
</button>
</form>
</div>
  );
};

export default ContactForm;
