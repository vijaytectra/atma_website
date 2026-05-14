import React from "react";
import PageHead from "../components/PageHead";
import CharitableContent from "../components/charitable/CharitableContent";

function CharitableActivities() {
  return (
    <>
      <PageHead
        title="What We Do"
        subtitle="Charitable Activities"
        // description="ATMA is deeply committed to giving back to the community through various charitable initiatives. These include organising free medical camps, providing essential healthcare to underserved populations, and supporting disaster relief efforts."
        bgImage="/pageHeader/desktop.jpg"
        mobileImage="/pageHeader/mobile.jpg"
      />
      <CharitableContent />
    </>
  );
}

export default CharitableActivities;
