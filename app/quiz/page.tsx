"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { quizzesData, QuestionType, GenreType } from "../../data/quiz";
import ResultScreen from "./ResultScreen";

function QuizComponent() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") as GenreType | null;
  const keyword = searchParams.get("keyword");
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

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
      const finalAnswer = question.finalAnswer[answerIndex];

      if (finalAnswer !== -1) {
        console.log("finalAnswer", finalAnswer);
        setIsCorrect(quizzesData[genre].keywords[finalAnswer] === keyword);
      } else {
        setCurrentQuestion(nextQuizIndex);
      }
    }
  };

  if (isCorrect !== null) {
    return <ResultScreen isCorrect={isCorrect} />;
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
