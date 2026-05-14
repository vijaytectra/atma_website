import React from "react";
import PageHead from "../components/PageHead";
import GalleryContent from "../components/gallery/GalleryContent";
import GalleryMain from "../components/gallery/GalleryMain";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="Gallery"
        // description="Explore our vibrant collection of moments that reflect our commitment to healthcare, community service, and cultural unity. From annual conventions and medical camps to charitable outreach and member events, our gallery showcases the dedication and passion of our members."
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <GalleryContent />
      <GalleryMain />
    </>
  );
}

export default page;
