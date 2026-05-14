"use client";
import React, { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      setMessage("All fields are required.");
      setStatus("error");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Message sent successfully!");
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          message: "",
        });
      } else {
        setMessage(data.error || "Failed to send message. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 5000); // Increased timeout to 5 seconds for success messages
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className={styles.contactFormContainer}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.description}>
        Contact us today to learn more about our services!
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={styles.input}
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={styles.input}
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor="mobile">
              Mobile No.
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className={styles.input}
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-sm text-start ${
            status === "error" ? "text-red-500" : "!text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default ContactForm;
