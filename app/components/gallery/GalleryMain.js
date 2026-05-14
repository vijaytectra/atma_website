/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import {
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
  FaPlay,
} from "react-icons/fa";
import styles from "./GalleryMain.module.css";

const imageItems = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  category: index % 2 === 0 ? "Donations" : "Volunteers",
  src: `/gallery/${index + 1}.jpg`,
}));

const videoItems = Array.from({ length: 17 }, (_, index) => ({
  id: index + 1,
  src: `/videos/${index + 1}.mp4`,
  thumbnail: `/gallery/${index + 11}.jpg`,
}));

const categories = ["All", "Donations", "Volunteers", "Videos"];
const itemsPerPage = 8;

function GalleryMain() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [playingVideo, setPlayingVideo] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? imageItems
      : activeCategory === "Videos"
      ? videoItems
      : imageItems.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className={styles.GalleryMain}>
      <div className="container">
        <div className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.tab} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <hr className={styles.tabsHr} />

        <div className={styles.galleryGrid}>
          {activeCategory === "Videos"
            ? displayedItems.map((video) => (
                <div key={video.id} className={styles.videoItem}>
                  {playingVideo === video.id ? (
                    <video
                      src={video.src}
                      controls
                      autoPlay
                      className={styles.video}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      className={styles.videoThumbnail}
                      onClick={() => setPlayingVideo(video.id)}
                      style={{ position: "relative", cursor: "pointer" }}
                    >
                      <img
                        src={video.thumbnail}
                        alt="Video Thumbnail"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <FaPlay
                        className={styles.playIcon}
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "2rem",
                          color: "white",
                          background: "rgba(0, 0, 0, 0.5)",
                          borderRadius: "50%",
                          padding: "0.5rem",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))
            : displayedItems.map((item) => (
                <div key={item.id} className={styles.galleryItem}>
                  <img
                    src={item.src}
                    alt={item.category}
                    className="cursor-pointer"
                  />
                </div>
              ))}
        </div>

        <div className={styles.pagination}>
          <FaLongArrowAltLeft
            cursor="pointer"
            size={20}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.active : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <FaLongArrowAltRight
            cursor="pointer"
            size={20}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </div>
      </div>
    </section>
  );
}

export default GalleryMain;
