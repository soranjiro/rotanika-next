"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
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

  return (
    <div className="main-container">
      <h1 className="title">ROTANIKA</h1>
      <p className="description">
        Rotanika is a genie who admires Akinator.
        <br />
          Answer Rotanika&apos;s questions accurately and let him guess your topic!
        <br />
        However, Rotanika is still inexperienced, so we will decide the topic.
      </p>
      <div className="genre-container">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className="button genre-button"
            type="button"
          >
            <Image src={getGenreImage(genre)} alt={genre} className="genre-image" />
            <span className="genre-text">{genre}</span>
          </button>
        ))}
      </div>

      {selectedKeyword && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Image src={getGenreImage()} alt="Sample" className="popup-image" />
            <h2>This is the topic!
              <br />Do your best to let me guess the answer</h2>
            <h2>{selectedKeyword}</h2>
            <button onClick={handleClosePopup} type="button">
              Start the quiz
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <a
          href="https://github.com/soranjiro/rotanika-next"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </footer>
    </div>
  );
}
