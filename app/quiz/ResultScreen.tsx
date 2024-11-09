import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { language } from '../../data/quiz';
import angryDevil from '../../images/angryDevil.png';
import angryDevil2 from '../../images/angryDevil2.png';
import angryDevil3 from '../../images/angryDevil3.png';
import happyDevil from '../../images/happyDevil.png';

interface ResultScreenProps {
  isCorrect: boolean;
  keyword: string | undefined;
  finalAnswer: string | undefined;
}

const ResultScreen: React.FC<ResultScreenProps> = ({
  isCorrect,
  keyword,
  finalAnswer,
}) => {
  const getRandomAngryDevilImage = () => {
    const images = [angryDevil, angryDevil2, angryDevil3];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="result-container">
      <Image
        src={isCorrect ? happyDevil : getRandomAngryDevilImage()}
        alt={isCorrect ? 'Happy Devil' : 'Angry Devil'}
        className="popup-image"
      />
      <h1 className="result-title">
        {isCorrect
          ? language === 'en'
            ? 'As expected of me!'
            : 'さすが我輩だ！'
          : language === 'en'
            ? "I can't guess if you don't answer properly!!"
            : 'ちゃんと答えてくれなきゃ分からないじゃないか！！'}
      </h1>
      <h2 className="result-subtitle">
        {language === 'en' ? 'Your topic: ' : 'あなたのお題: '}
        {keyword}
      </h2>
      <h2 className="result-subtitle">
        {language === 'en' ? "Rotanika's answer: " : 'Rotanikaの答え: '}
        {isCorrect
          ? finalAnswer
          : language === 'en'
            ? 'Wrong...😡'
            : '間違えた...😡'}
      </h2>
      <Link href="/" passHref legacyBehavior>
        <a className="result-link">
          {language === 'en' ? 'Go back to home' : 'ホームに戻る'}
        </a>
      </Link>
    </div>
  );
};

export default ResultScreen;
