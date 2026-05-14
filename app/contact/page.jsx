import React from "react";
import PageHead from "../components/PageHead";
import ContactSection1 from "../components/contact/ContactSection1";
import GoogleMap from "../components/contact/GoogleMap";

function page() {
  return (
    <>
      <PageHead
        title="Home"
        subtitle="Contact Us"
        // description="ATMA is a dedicated organization committed to promoting charitable healthcare initiatives through its foundation, ATMA-CF. Operating both nationally and internationally, we strive to provide medical assistance, community health programs, and support for underserved populations. Through our efforts, we aim to improve healthcare accessibility, raise awareness, and create a lasting impact on communities in need."
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <ContactSection1 />
      <GoogleMap />
    </>
  );
}

export default page;
