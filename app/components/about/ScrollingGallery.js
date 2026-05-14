/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ScrollingGallery.module.css";

const items = [
  { image: "/about/about2.png", link: "/atma-chapters", title: "Groups" },
  { image: "/about/about2.png", link: "/atma-chapters", title: "Youths" },
  { image: "/about/about2.png", link: "/atma-chapters", title: "Adults" },
  { image: "/about/about2.png", link: "/atma-chapters", title: "Kids" },
];

const ScrollingGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.scroller} onMouseLeave={handleMouseLeave}>
        {/* Render the items twice for seamless scrolling */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className={styles.item}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <img
              src={item.image}
              alt={`Image ${index + 1}`}
              className={styles.image}
            />
            <p>{item.title}</p>
            {hoveredIndex === index && (
              <Link href={item.link} passHref>
                <div className={styles.readMore}>Read More</div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;
