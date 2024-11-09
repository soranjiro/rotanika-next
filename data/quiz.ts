import { StaticImageData } from 'next/image';
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
  const combinedData: QuizzesDataType = { ...quizzesDataEn, ...quizzesDataJa };
  return combinedData;
};

type GenreType = typeof genresEn[number] | typeof genresJa[number];

interface QuestionType {
  question: string;
  answers: string[];
  nextQuizIndexes: number[];
  finalAnswer: number[];
};

interface QuizzesDataType {
  [key: string]: {
    quizzes: QuestionType[];
    keywords: (string | number)[];
    devilImage?: StaticImageData;
    details?: string[];
  };
}

export { language, setLanguage, getGenres, getQuizzesData };
export type { GenreType, QuestionType, QuizzesDataType };
