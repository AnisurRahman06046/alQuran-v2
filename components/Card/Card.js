import React from "react";

function Card({ surah }) {
  return (
    <div className="flex flex-col p-3">
      <div className="bg-gradient-to-b from-purple-200 to-purple-300 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-2 text-purple-800">
          {surah.name.short}
        </h2>
        <p className="text-gray-800 mb-4">{surah.name.transliteration.en}</p>
        <p className="text-sm text-gray-700">{surah.name.transliteration.id}</p>
      </div>
    </div>
  );
}

export default Card;
