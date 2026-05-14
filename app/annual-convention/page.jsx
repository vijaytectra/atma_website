import React from "react";
import PageHead from "../components/PageHead";
import AnnualConvention from "../components/annual/AnnualConvention";

function page() {
  return (
    <>
      <PageHead
        title="What We Do"
        subtitle="Annual Convention"
        // description="The ATMA Annual Convention is a landmark event that unites Tamil healthcare professionals across the U.S. and beyond. This gathering fosters medical excellence, networking, and cultural pride. Attendees engage in expert-led discussions, discover the latest advancements in healthcare, and celebrate Tamil heritage through vibrant performances. Join us to expand your knowledge, connect with pioneers, and be part of a thriving professional community."
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <AnnualConvention />
    </>
  );
}

export default page;
