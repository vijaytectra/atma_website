"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.phone ||
      !formData.date ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({ type: "error", message: "All fields are required." });
    } else {
      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });
      setFormData({ name: "", phone: "", date: "", subject: "", message: "" });
    }

    setTimeout(() => setStatus({ type: "", message: "" }), 3000);
  };

  return (
    <div className={styles.container}>
      <h3>Contact Us</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          className={styles.input}
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className={styles.input}
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className={styles.button}>
          Contact Us
        </button>
      </form>

      {status.message && (
        <p
          className={
            status.type === "success" ? "text-green-500" : "text-red-500"
          }
        >
          {status.message}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
