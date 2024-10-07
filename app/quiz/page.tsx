"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import genres, { quizzesNumber, quizzesElement, QuestionType } from "../../data/quiz";
import Link from "next/link";
import ResultScreen from "./ResultScreen";

export default function Quiz() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const keyword = searchParams.get("keyword");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    if (genre === "数") {
      setQuestions(quizzesNumber);
    } else if (genre === "原子") {
      setQuestions(quizzesElement);
    }
  }, [genre]);

  const handleAnswer = (answer: string) => {
    const question = questions[currentQuestion];
    const answerIndex = question.answers.indexOf(answer);
    const nextQuizIndex = question.nextQuizIndexes[answerIndex];
    const finalAnswer = question.finalAnswer[answerIndex];

    if (finalAnswer !== -1) {
      setIsCorrect(finalAnswer === 0);
    } else {
      setCurrentQuestion(nextQuizIndex);
    }
  };

  if (isCorrect !== null) {
    return <ResultScreen isCorrect={isCorrect} />;
  }

  if (questions.length === 0) {
    return (
      <div className="not-found-container">
        <h1 className="not-found-title">ジャンルが見つかりません</h1>
        <Link href="/rotanika" passHref legacyBehavior>
          <a className="not-found-link">
            ホームに戻る
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">{questions[currentQuestion].question}</h1>
      <h2 className="quiz-subtitle">お題: {keyword}</h2>
      <div className="mt-4">
        {questions[currentQuestion].answers.map((option) => (
          <button
            key={option}
            className="quiz-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
