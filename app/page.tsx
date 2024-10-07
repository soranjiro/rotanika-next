"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import genres, { keywordsNumber, keywordsElement } from "../data/quiz";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const router = useRouter();

  const getRandomKeyword = (keywords: string[]) => {
    const randomIndex = Math.floor(Math.random() * keywords.length);
    return keywords[randomIndex];
  };

  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre);
    if (genre === "数") {
      setSelectedKeyword(getRandomKeyword(keywordsNumber.map(String))); // 数字を文字列に変換
    } else if (genre === "原子") {
      setSelectedKeyword(getRandomKeyword(keywordsElement.map(String))); // 数字を文字列に変換
    }
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
          >
            {genre}
          </button>
        ))}
      </div>

      {selectedKeyword && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>お題: {selectedKeyword}</h2>
            <button onClick={handleClosePopup}>
              クイズを始める
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
