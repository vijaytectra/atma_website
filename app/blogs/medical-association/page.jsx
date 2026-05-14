import React from "react";
import PageHead from "../../components/PageHead";
import BlogInnerPage from "@/app/components/blogInner/BlogInnerPage";

function page() {
  return (
    <>
      <PageHead
        title="Blogs"
        link="/blogs"
        subtitle="Medical Association"
        // description="The Tamil Medical Association (ATMA) is a global network of Tamil-origin medical professionals dedicated to advancing healthcare, supporting aspiring medical students, and providing medical aid to underserved communities. With a mission to foster collaboration and innovation, ATMA is making a significant impact in the field of medicine."
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <BlogInnerPage />
    </>
  );
}

export default page;
