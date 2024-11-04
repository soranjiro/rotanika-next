"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from 'next/image';
import { quizzesData, QuestionType, GenreType } from "../../data/quiz";
import ResultScreen from "./ResultScreen";
import numberDevil from "../../images/numberDevil.png";

function QuizComponent() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") as GenreType | null;
  const keyword = searchParams.get("keyword") ?? undefined;
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [finalAnswer, setFinalAnswer] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (genre) {
      setQuestions(quizzesData[genre]?.quizzes || []);
    }
  }, [genre]);

  const handleAnswer = (answer: string) => {
    if (!genre) return;

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
  };

  const getGenreImage = () => {
    return genre ? quizzesData[genre]?.devilImage || numberDevil : numberDevil;
  };

  const renderResultScreen = () => {
    return <ResultScreen isCorrect={isCorrect!} keyword={keyword!} finalAnswer={finalAnswer!} />;
  };

  const renderNotFound = () => {
    return (
      <div className="not-found-container">
        <h1 className="not-found-title">Genre not found</h1>
        <Link href="/" passHref legacyBehavior>
          <a className="not-found-link">Return to Home</a>
        </Link>
      </div>
    );
  };

  const renderQuiz = () => {
    return (
      <div className="quiz-container">
        <Image src={getGenreImage()} alt="Sample" className="popup-image" />
        <h1 className="quiz-title">{questions[currentQuestion].question}</h1>
        <h2 className="quiz-subtitle">Topic: {keyword}</h2>
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
  };

  if (isCorrect !== null) return renderResultScreen();
  if (questions.length === 0) return renderNotFound();
  return renderQuiz();
}

export default function Quiz() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuizComponent />
    </Suspense>
  );
}
