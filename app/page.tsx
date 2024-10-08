"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import genres, { quizzesData, GenreType } from "../data/quiz";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<GenreType | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const router = useRouter();

  const handleGenreClick = (genre: GenreType) => {
    setSelectedGenre(genre);
    const keywords = quizzesData[genre].keywords.map(String);
    setSelectedKeyword(getRandomKeyword(keywords));
  };

  const getRandomKeyword = (keywords: string[]): string => {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    return keywords[randomIndex];
  };

  const handleClosePopup = () => {
    if (selectedGenre && selectedKeyword) {
      router.push(`/quiz?genre=${selectedGenre}&keyword=${selectedKeyword}`);
    }
  };

  return (
    <div className="main-container">
      <h1 className="title">ROTANIKA</h1>
      <p className="description">
        RotanikaはAkinatorに憧れている魔神です。
        <br />
        Rotanikaの質問に正確に答えて、あなたのお題を答えさせてあげよう！
        <br />
        ただし、Rotanikaはまだ未熟なので、お題はこちらで決めます。
      </p>
      <div className="button-container">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className="button"
            type="button"
          >
            {genre}
          </button>
        ))}
      </div>

      {selectedKeyword && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>お題: {selectedKeyword}</h2>
            <button onClick={handleClosePopup} type="button">
              クイズを始める
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
