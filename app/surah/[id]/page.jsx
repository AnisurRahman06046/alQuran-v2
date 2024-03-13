import getSingleSurah from "@/lib/getSingleSurah";
import Link from "next/link";
import React from "react";

async function SingleSurah({ params }) {
  const { id } = params;
  const singleSurah = await getSingleSurah(id);
  return (
    <div>
      SingleSurah {id}
      <h1>
        Surah : {singleSurah.name.short} {singleSurah.name.transliteration.en}
      </h1>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Back to previous
        </button>
      </Link>
    </div>
  );
}

export default SingleSurah;
