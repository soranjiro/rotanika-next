import numberDevil from "../images/numberDevil.png";
import elementDevil from "../images/elementDevil.png";
import jukugoDevil from "../images/jukugoDevil.png";
import { QuestionType, QuizzesDataType } from "./quiz";

const genres = ['Number', 'Element', 'Yojijukugo'] as const;
type GenreType = typeof genres[number];

/**
 * question: Question text
 * answers: Choices
 * nextQuizIndexes: Index of the next quiz for each choice.
 * finalAnswer: Final answer index for each choice. (-1 means go to the next quiz)
 */


const quizzesNumber: QuestionType[] = [
  {
    question: 'Is it an odd number?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Is it a prime number?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Is it a Mersenne prime?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: 'Does it have more than 7 divisors?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: 'Is it a perfect square?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Can it be expressed as 2^n?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: 'Is it a perfect number?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
  // Add other questions
];

const keywordsNumber = [2147483647, 6904303451, 9458583811, 2047088711, 4294967296, 2952183556, 8589869056, 6655983616];

const quizzesElement: QuestionType[] = [
  {
    question: 'Is it a gas at room temperature?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Is it a gas even at -150°F?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Is it used in camera flashes?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: 'Is it the heaviest element among gases?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: 'Is its atomic number less than 100?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Is the pigment with this element’s ion in ZrSiO4 yellow?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: 'Was it discovered by a woman?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
];

const keywordsElement = ['Kr', 'Xe', 'Rn', 'Cl', 'Pr', 'Dy', 'Mt', 'Fl'];


const quizzes4Jukugo: QuestionType[] = [
  {
    question: 'Is it more than 8 characters long when written in hiragana?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Does it contain the same character when written in hiragana?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: 'What is the source?',
    answers: ['『楚辞』「漁夫」', '『漢書』「主父偃伝」'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: 'Is it used for buildings?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: 'Is it related to clothing?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: 'Did it originate from the words of Yang Zhu?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: 'Is this person enthusiastic?',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
];

const keywords4Jukugo = ['濯纓濯足', '獣聚鳥散', '黝堊丹漆', '零絹尺楮', '狗吠緇衣', '靡衣婾食', '北轅適楚', '握髪吐哺'];

const details4Jukugo = [
                        '【takueitakusoku】To advance or retreat according to the course of the world.\n"If the water of the Canglang (name of a river) is clear, I can wash my tassels; if the water of the Canglang is muddy, I can wash my feet." - Mencius\nSource: "Chu Ci" "Fisherman"',
                        '【jousyoutyousan】A metaphor for an unorganized gathering.\nSource: "Han Shu" "Zhu Fu Yan Zhuan"',
                        '【yuuakutannsitsu】Buildings are made according to old customs.\n"黝" is a bluish-black color, "堊" is white, "丹" is red, and "漆" is black or lacquer.\nSource: Li Gou "Yuan Zhou Xue Ji"',
                        '【reikensekityo】Small pieces of calligraphy and painting. Small pieces of cloth and paper.\n"零" and "尺" both mean a little. "零絹" refers to small pieces of cloth. "尺楮" refers to small pieces of paper. "楮" is a plant used as a raw material for Japanese paper.',
                        '【kuhaishii】It is natural to be suspected if you change your usual clothes.\nSource: "Han Feizi"説林･下. Yang Zhu’s younger brother Yang Bu went out in white clothes and was rained on. When he changed into black clothes and returned, his dog did not recognize him and barked. When Yang Bu got angry and tried to hit the dog, Yang Zhu said, "If a white dog came back black, you would also be suspicious."',
                        '【biitousyoku】Loving beautiful clothes and indulging in temporary food without thinking about the future.\nSource: "Han Shu" "Han Xin Zhuan"',
                        '【hokentekiso】A metaphor for conflicting aspirations and actions.\nSource: "Shen Jian" "Za Yan・Xia"',
                        '【akuhatutoho】Being enthusiastic about seeking talented people.\nSource: "Han Shi Wai Zhuan" III. "One bathes three times and grasps hair, one meal three times and spits out food, still fearing to lose the talents of the world."',
                      ];


const quizzesData: QuizzesDataType = {
  'Number': { quizzes: quizzesNumber, keywords: keywordsNumber, devilImage: numberDevil },
  'Element': { quizzes: quizzesElement, keywords: keywordsElement, devilImage: elementDevil },
  'Yojijukugo': { quizzes: quizzes4Jukugo, keywords: keywords4Jukugo, devilImage: jukugoDevil, details: details4Jukugo },
};

export default genres;
export { quizzesData };
export type { QuestionType, GenreType };
