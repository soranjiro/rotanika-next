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
  const getGenreImage = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
      case 0:
        return angryDevil;
      case 1:
        return angryDevil2;
      case 2:
        return angryDevil3;
      default:
        return angryDevil;
    }
  };
  return (
    <div className="result-container">
      <Image
        src={isCorrect ? happyDevil : getGenreImage()}
        alt={isCorrect ? "Number Devil" : "Angry Devil"}
        className="popup-image"
      />
      <h1 className="result-title">
        {isCorrect
          ? "さすが我輩だ！"
          : "ちゃんと答えてくれなきゃ分からないじゃないか！！"}
      </h1>
      <h2 className="result-subtitle">あなたのお題: {keyword}</h2>
      <h2 className="result-subtitle">
        Rotanikaの答え: {isCorrect ? finalAnswer : "間違えた...😡"}
      </h2>
      <Link href="/" passHref legacyBehavior>
        <a className="result-link">ホームに戻る</a>
      </Link>
    </div>
  );
};

export default ResultScreen;

/*
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import angryDevil from '../../images/angryDevil.png';
import angryDevil2 from '../../images/angryDevil2.png';
import angryDevil3 from '../../images/angryDevil3.png';
import numberDevil from '../../images/numberDevil.png';

interface ResultScreenProps {
  isCorrect: boolean;
  keyword: string;
  finalAnswer: string;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ isCorrect, keyword, finalAnswer }) => {
  const getGenreImage = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
      case 0:
        return angryDevil;
      case 1:
        return angryDevil2;
      case 2:
        return angryDevil3;
      default:
        return angryDevil;
    }
  }

  return (
    <div className="result-container">
      <Image
        src={isCorrect ? numberDevil : getGenreImage()}
        alt={isCorrect ? "Number Devil" : "Angry Devil"}
        className="popup-image"
      />
      <h2 className="result-title">
        {isCorrect
          ? "さすが我輩だ！"
          : "ちゃんと答えてくれなきゃ分からないじゃないか！！"}
      </h2>
      <h2 className="result-subtitle">あなたのお題: {keyword}</h2>
      <h2 className="result-subtitle">
        Rotanika: {isCorrect ? finalAnswer : "間違えた...😡"}
      </h2>
      <Link href="/" passHref legacyBehavior>
        <a className="result-link">ホームに戻る</a>
      </Link>
    </div>
  );
}

export default ResultScreen;
*/
