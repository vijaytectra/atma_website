/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
  {
    image: "/home/testimonial1.png",
    text: "ATMA has created a powerful network of Tamil healthcare professionals dedicated to making a real impact. Their medical camps and outreach programs truly change lives.",
    name: "Dr. Arjun Kumar",
    position: "MD",
  },
  {
    image: "/home/testimonial.png",
    text: "Being part of ATMA has been an incredible journey—uniting with fellow physicians to support underserved communities and advance medical education worldwide.",
    name: "Dr. Meena Rajan",
    position: "Pediatrician",
  },
  {
    image: "/home/testimonial1.png",
    text: "ATMA not only connects Tamil physicians but also empowers us to give back through humanitarian efforts, scholarships, and disaster relief. Proud to be a member!",
    name: "Dr. Suresh Narayanan",
    position: "Cardiologist",
  },
  {
    image: "/home/testimonial.png",
    text: "The dedication and service of ATMA are unmatched. Their commitment to healthcare access and professional growth inspires us all to contribute more.",
    name: "Dr. Priya Venkatesh",
    position: "Surgeon",
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Reset animation after it finishes
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <section className={styles.testimonialSection}>
      <div className="container">
        <div className={styles.testiRow}>
          <div className={styles.testiCol}>
            <p className="font-light tracking-[3px]">TESTIMONIALS</p>
            <h3>Sharing Hope, Spreading Love.</h3>
          </div>
          <div className={styles.slider}>
            <div
              className={`${styles.slide} ${
                isAnimating ? styles.animateSlide : ""
              }`}
              onAnimationEnd={handleAnimationEnd}
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className={styles.image}
              />
              <div className={styles.content}>
                <p className="text-left">{testimonials[currentIndex].text}</p>
                <p style={{ color: "var(--grey)", marginTop: "10px" }}>
                  {testimonials[currentIndex].name} -{" "}
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={handlePrev}>
                <FaChevronLeft />
              </button>
              <button className={styles.arrow} onClick={handleNext}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSlider;
