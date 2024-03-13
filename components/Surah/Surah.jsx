import getAllSurah from "@/lib/getAllSurah";
import React from "react";
import Card from "../Card/Card";

async function Surah() {
  const surahs = await getAllSurah();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {surahs.map((surah, index) => (
            <Card key={index} surah={surah} /> // Use the Card component passing the surah as a prop
          ))}
        </div>
      </div>
    </div>
  );
}

export default Surah;
