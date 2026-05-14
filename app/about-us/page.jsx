import React from "react";
import PageHead from "../components/PageHead";
import AboutSection1 from "../components/about/AboutSection1";
import AboutSection2 from "../components/about/AboutSection2";
import BoardMembers from "../components/home1/BoardMembers";
import Vision from "../components/home1/Vision";
import VisionCounter from "../components/home1/VisionCounter";
import President from "../components/home1/President";

function page() {
  return (
    <>
      <PageHead
        title="Who We Are"
        subtitle="About Us"
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <AboutSection1 />
      <Vision />
      <VisionCounter />
      
      <AboutSection2 />
      <BoardMembers />
      <President />
    </>
  );
}

export default page;
