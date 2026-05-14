import React from "react";
import PageHead from "../components/PageHead";
import AtmaChapterSection1 from "../components/atmac/AtmaChapterSection1";
import AtmaChapterSection2 from "../components/atmac/AtmaChapterSection2";
import AtmaChapterSection3 from "../components/atmac/AtmaChapterSection3";

function page() {
  return (
    <>
      <PageHead
        title="Who We Are"
        subtitle="ATMA Chapters"
        // description="The American Tamil Medical Association (ATMA) has established multiple chapters across the United States to strengthen its network and broaden its impact. Each chapter serves as a local hub where Tamil healthcare professionals can connect, collaborate, and contribute to community health initiatives."
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <AtmaChapterSection1 />
      <AtmaChapterSection2 />
      <AtmaChapterSection3 />
    </>
  );
}

export default page;
