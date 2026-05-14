"use client";

import React, { useState, useEffect } from "react";
import styles from "./NewsletterForm.module.css";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // "success" or "error"
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Email is required.");
      setStatus("error");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Subscribed successfully!");
        setStatus("success");
        setShowSuccess(true);
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed. Please try again.");
        setStatus("error");
        setShowSuccess(false);
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      setStatus("error");
      setShowSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setStatus("");
        setShowSuccess(false);
      }, 5000); // Increased timeout to 5 seconds for success messages
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="relative">
      {showSuccess ? (
        <div className={`${styles.successMessage} p-4 rounded-lg text-center`}>
          <svg
            className="w-6 h-6 text-green-500 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <h3 className="text-lg font-medium text-green-800">
            Subscribed Successfully!
          </h3>
          <p className="text-sm text-green-600">
            Thank you for subscribing to our newsletter.
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className={styles.NewsletterForm}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={styles.button}
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe Now"}
            </button>
          </form>
          {message && !showSuccess && (
            <p
              className={`mt-2 text-sm text-center ${
                status === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {message}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default NewsletterForm;
