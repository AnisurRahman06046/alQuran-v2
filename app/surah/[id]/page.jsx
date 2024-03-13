import getSingleSurah from "@/lib/getSingleSurah";
import React from "react";

async function SingleSurah({ params }) {
  const { id } = params;
  const singleSurah = await getSingleSurah(id);
  return <div>SingleSurah {id}

  <h1>Surah : {singleSurah.name.short} {singleSurah.name.transliteration.en}</h1>
  </div>;
}

export default SingleSurah;
