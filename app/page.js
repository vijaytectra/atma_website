import React from "react";
import AboutHome from "./components/home1/AboutHome";
import President2 from "./components/home1/President2";
import BoardMembers from "./components/home1/BoardMembers";
import NewsHome from "./components/home1/NewsHome";
import TestimonialSlider from "./components/home1/TestimonialSlider";
import ThirukuralSlider from "./components/home1/Thirukural";
import Banner from "./components/home1/Banner";
import Vision from "./components/home1/Vision";
import VisionCounter from "./components/home1/VisionCounter";
import VideoSection from "./components/VideoSection";

function Home() {
  return (
    <>
      <Banner />
      <ThirukuralSlider />
      <AboutHome />
      <Vision />
      <VisionCounter />
      <President2 />
      <BoardMembers />
      {/* <VideoSection /> */}
      <NewsHome />
      <TestimonialSlider />
    </>
  );
}

export default Home;
