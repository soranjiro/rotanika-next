"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { quizzesData, QuestionType, GenreType } from "../../data/quiz";
import ResultScreen from "./ResultScreen";
import Image from 'next/image';
import numberDevil from "../../images/numberDevil.png";
import elementDevil from "../../images/elementDevil.png";



function QuizComponent() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") as GenreType | null;
  const keyword = searchParams.get("keyword") ?? undefined; // nullをundefinedに変換
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [finalAnswer, setFinalAnswer] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (genre && quizzesData[genre]) {
      setQuestions(quizzesData[genre].quizzes);
    }
  }, [genre]);

  const handleAnswer = (answer: string) => {
    if (genre) {
      const question = questions[currentQuestion];
      const answerIndex = question.answers.indexOf(answer);
      const nextQuizIndex = question.nextQuizIndexes[answerIndex];
      const finalAnswerIndex = question.finalAnswer[answerIndex];

      if (finalAnswerIndex !== -1) {
        const finalAnswerKeyword = quizzesData[genre].keywords[finalAnswerIndex].toString();
        setIsCorrect(finalAnswerKeyword === keyword);
        setFinalAnswer(finalAnswerKeyword);
      } else {
        setCurrentQuestion(nextQuizIndex);
      }
    }
  };

  const getGenreImage = () => {
    if (genre && quizzesData[genre]) {
      return quizzesData[genre].devilImage || numberDevil;
    }
    return numberDevil;
  };

  if (isCorrect !== null) {
    return <ResultScreen isCorrect={isCorrect} keyword={keyword} finalAnswer={finalAnswer} />;
  }

  if (questions.length === 0) {
    return (
      <div className="not-found-container">
        <h1 className="not-found-title">ジャンルが見つかりません</h1>
        <Link href="/" passHref legacyBehavior>
          <a className="not-found-link">
            ホームに戻る
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <Image src={getGenreImage()} alt="Sample" className="popup-image" />
      <h1 className="quiz-title">{questions[currentQuestion].question}</h1>
      <h2 className="quiz-subtitle">お題: {keyword}</h2>
      <div className="mt-4">
        {questions[currentQuestion].answers.map((option) => (
          <button
            key={option}
            className="quiz-button"
            onClick={() => handleAnswer(option)}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Quiz() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizComponent />
    </Suspense>
  );
}
