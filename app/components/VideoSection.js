"use client";

import { useRef } from "react";

const VideoSection = () => {
  const videoRef = useRef(null);

  return (
    <section className="pb-[60px] md:pb-[12vh]">
      <div className="container relative w-full h-auto overflow-hidden group">
        <div className="flex flex-col items-center justify-center mb-8">
          <h2>Thiru. Ma. Subramanian</h2>
          <p>Minister for Health and Family Welfare of Tamil Nadu</p>
        </div>

        <video
          ref={videoRef}
          controls
          poster="/minister.webp"
          className="w-full h-full object-cover"
        >
          <source src="/minister.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
