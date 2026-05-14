"use client";

import React, { useEffect, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import styles from "./AutoSlider.module.css";
import Link from "next/link";
import Image from "next/image";

const AutoSlider = () => {
  // Define the array of images
  const images = [
    "/footSlider/1.webp",
    "/footSlider/2.webp",
    "/footSlider/3.webp",
    "/footSlider/4.webp",
    "/footSlider/5.webp",
    "/footSlider/6.webp",
    "/footSlider/7.webp",
    "/footSlider/8.webp",
    "/footSlider/9.webp",
  ];

  const sliderRef = useRef(null);
  const scrollIntervalRef = useRef(null); // Using useRef to store the interval

  // Set up automatic scrolling
  useEffect(() => {
    scrollIntervalRef.current = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 2000); // Adjust the interval for smoothness

    return () => clearInterval(scrollIntervalRef.current); // Cleanup interval on component unmount
  }, []);

  return (
    <div className={styles.slider} ref={sliderRef}>
      {images.map((src, index) => (
        <div key={index} className={styles.slide}>
          <Image
            width={256}
            height={192}
            src={src}
            alt={`Slide ${index + 1}`}
          />
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instaIcon}
          >
            <FaInstagram />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AutoSlider;
