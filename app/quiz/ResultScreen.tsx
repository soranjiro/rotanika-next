import React from 'react';
import Link from "next/link";
import Image from "next/image";
import angryDevil from "../../images/angryDevil.png";
import angryDevil2 from "../../images/angryDevil2.png";
import angryDevil3 from "../../images/angryDevil3.png";
import happyDevil from "../../images/happyDevil.png";

interface ResultScreenProps {
  isCorrect: boolean;
  keyword: string | undefined;
  finalAnswer: string | undefined;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ isCorrect, keyword, finalAnswer }) => {
  const getRandomAngryDevilImage = () => {
    const images = [angryDevil, angryDevil2, angryDevil3];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="result-container">
      <Image
        src={isCorrect ? happyDevil : getRandomAngryDevilImage()}
        alt={isCorrect ? "Happy Devil" : "Angry Devil"}
        className="popup-image"
      />
      <h1 className="result-title">
        {isCorrect
          ? "As expected of me!"
          : "I can&apos;t understand if you don&apos;t answer properly!!"}
      </h1>
      <h2 className="result-subtitle">Your topic: {keyword}</h2>
      <h2 className="result-subtitle">
        Rotanika&apos;s answer: {isCorrect ? finalAnswer : "Wrong...😡"}
      </h2>
      <Link href="/" passHref legacyBehavior>
        <a className="result-link">Return to Home</a>
      </Link>
    </div>
  );
};

export default ResultScreen;
