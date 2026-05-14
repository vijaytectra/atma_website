import React from "react";
import PageHead from "../components/PageHead";
import BlogMain from "../components/blog/BlogMain";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="News & Blogs"
        // description="Our News and Blogs section highlights key events, medical advancements, and community outreach efforts. From insightful articles by healthcare experts to coverage of our annual conventions and charitable activities, this section keeps you connected to the heart of ATMA’s mission."
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <BlogMain />
    </>
  );
}

export default page;
