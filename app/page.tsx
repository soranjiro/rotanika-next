"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { language, setLanguage, getGenres, getQuizzesData, GenreType } from "../data/quiz";
import numberDevil from "../images/numberDevil.png";
import "./globals.css";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<GenreType | null>(null);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string>(language);
  const [currentGenres, setCurrentGenres] = useState(getGenres());
  const [currentQuizzesData, setCurrentQuizzesData] = useState(getQuizzesData());
  const router = useRouter();

  useEffect(() => {
    setLanguage(currentLanguage);
    setCurrentGenres(getGenres());
    setCurrentQuizzesData(getQuizzesData());
  }, [currentLanguage]);

  const handleGenreClick = (genre: GenreType) => {
    setSelectedGenre(genre);
    const keywords = currentQuizzesData[genre].keywords.map(String);
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
      return currentQuizzesData[genre].devilImage || numberDevil;
    }
    return numberDevil;
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <div className="main-container">
      <h1 className="title">ROTANIKA</h1>
      <p className="description">
        {currentLanguage === "en" ? (
          <>
            Rotanika is a genie who admires Akinator.
            <br />
            Answer Rotanika&apos;s questions accurately and let him guess your topic!
            <br />
            However, Rotanika is still inexperienced, so we will decide the
            topic.
          </>
        ) : (
          <>
            RotanikaはAkinatorに憧れている魔神です。
            <br />
            Rotanikaの質問に正確に答えて、あなたのお題を答えさせてあげよう！
            <br />
            ただし、Rotanikaはまだ未熟なので、お題はこちらで決めます。
          </>
        )}
      </p>
      <div className="genre-container">
        {currentGenres.map((genre) => (
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
              {currentLanguage === "en" ? (
                <>
                  Here is your topic!
                  <br />
                  Try to let me guess it correctly.
                </>
              ) : (
                <>
                  お題はこれだ!
                  <br />
                  頑張って我輩に答えを当てさせるんだな
                </>
              )}
            </h2>
            <h2>{selectedKeyword}</h2>
            <button onClick={handleClosePopup} type="button">
              {currentLanguage === "en" ? "Start Quiz" : "クイズを始める"}
            </button>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="language-selector">
          <label htmlFor="language-select">{currentLanguage === "en" ? "" : ""}</label>
          <select id="language-select" value={currentLanguage} onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </div>
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
