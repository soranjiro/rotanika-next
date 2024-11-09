"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa"; // GitHubアイコンのインポート
import genres, { quizzesData, GenreType } from "../data/quiz";
import numberDevil from "../images/numberDevil.png";

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

  const getGenreImage = (genre: GenreType | null = selectedGenre) => {
    if (genre) {
      return quizzesData[genre].devilImage || numberDevil;
    }
    return numberDevil;
  };

  const handleLanguageChange = () => {
    window.location.href =
      "https://rotanika-next-pak7yaffv-soranjiros-projects.vercel.app/";
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
      <div className="genre-container">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className="button genre-button"
            type="button"
          >
            <Image
              src={getGenreImage(genre)}
              alt={genre}
              className="genre-image"
            />
            <span className="genre-text">{genre}</span>
          </button>
        ))}
      </div>

      {selectedKeyword && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Image src={getGenreImage()} alt="Sample" className="popup-image" />
            <h2>
              お題はこれだ!
              <br />
              頑張って我輩に答えを当てさせるんだな
            </h2>
            <h2>{selectedKeyword}</h2>
            <button onClick={handleClosePopup} type="button">
              クイズを始める
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <button
          onClick={handleLanguageChange}
          className="button language-button"
          type="button"
        >
          Change to English
        </button>
        <a
          href="https://github.com/soranjiro/rotanika-next"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Repository"
        >
          <FaGithub size={30} />
        </a>
      </footer>
    </div>
  );
}
