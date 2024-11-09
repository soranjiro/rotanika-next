// FILE: quiz.ts
import genresJa, { quizzesData as quizzesDataJa } from './quiz-ja';
import genresEn, { quizzesData as quizzesDataEn } from './quiz-en';

let language = "en"; // ここで言語を切り替える

const setLanguage = (lang: string) => {
  language = lang;
};

const getGenres = () => {
  return language === "en" ? genresEn : genresJa;
};

const getQuizzesData = () => {
  const combinedData = { ...quizzesDataEn, ...quizzesDataJa };
  return combinedData;
};

type GenreType = typeof genresEn[number] | typeof genresJa[number];

interface QuestionType {
  question: string;
  answers: string[];
  nextQuizIndexes: number[];
  finalAnswer: number[];
};

export { language, setLanguage, getGenres, getQuizzesData };
export type { GenreType, QuestionType };
