const genres = ['数', '原子', '四字熟語'] as const;
type GenreType = typeof genres[number];

/**
 * question: 質問文
 * answers: 選択肢
 * nextQuizIndexes: 選択肢ごとの次のクイズのインデックス.
 * finalAnswer: 選択肢ごとの最終的な答えのインデックス.(-1の場合は次のクイズへ)
 */

interface QuestionType {
  question: string;
  answers: string[];
  nextQuizIndexes: number[];
  finalAnswer: number[];
};

const quizzesNumber: QuestionType[] = [
  {
    question: '奇数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: '素数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: 'メルセンヌ素数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: '約数は7つ以上ありますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: '平方数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: '2^nで表せますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: '完全数ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
  // 他の問題を追加
];

const keywordsNumber = [2147483647, 6904303451, 9458583811, 2047088711, 4294967296, 2952183556, 8589869056, 6655983616];

const quizzesElement: QuestionType[] = [
  {
    question: '常温で気体ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: '-150°Fでも気体ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: 'カメラのフラッシュに使われていますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: '気体の中で最も重たい元素ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: '原子番号は100以下ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: 'ZrSiO4に4価のこの原子のイオンが固溶した顔料は黄色ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: '発見したのは女性ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
];

const keywordsElement = ['Kr', 'Xe', 'Rn', 'Cl', 'Pr', 'Dy', 'Mt', 'Fl'];


const quizzes4Jukugo: QuestionType[] = [
  {
    question: '8文字以上ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [1, 4],
    finalAnswer: [-1, -1]
  },
  {
    question: 'ひらがなにした時同じ文字を含みますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [2, 3],
    finalAnswer: [-1, -1]
  },
  {
    question: '出典はどちらですか',
    answers: ['『楚辞』「漁夫」', '『漢書』「主父偃伝」'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [0, 1]
  },
  {
    question: '建物に対して使う言葉ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [2, 3]
  },
  {
    question: '服装に関係しますか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [5, 6],
    finalAnswer: [-1, -1]
  },
  {
    question: '楊朱の言葉から生まれましたか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [4, 5]
  },
  {
    question: 'この人は熱心ですか',
    answers: ['yes', 'no'],
    nextQuizIndexes: [0, 1],
    finalAnswer: [6, 7]
  },
];

const keywords4Jukugo = ['濯纓濯足', '獣聚鳥散', '黝堊丹漆', '零絹尺楮', '狗吠緇衣', '靡衣婾食', '北轅適楚', '握髪吐哺'];

const details4Jukugo = [
                        '【たくえいたくそく】世の成り行きに応じて進退すること。\n「滄浪（川の名）の水清（す）まば以て吾が纓を濯う可し、 滄浪の水濁らば以て吾が足を濯ふ可し」という孟子の一句\n出典：『楚辞』「漁夫」',
                        '【じゅうしゅうちょうさん】統率や規律の取れていない集まりのたとえ。\n出典：『漢書』「主父偃伝」',
                        '【ゆうあくたんしつ】建物が古いしきたりにかなって作られていることをいう。\n「黝」は青みを帯びた黒色、「堊」は白色、「丹」は赤色、「漆」は黒色または漆塗りのこと\n出典：李覯「袁州学記」',
                        '【れいけんせきちょ】書画の小片。絹や紙のきれはし。\n「零」と「尺」はどちらも少しという意味。「零絹」は布の小さな切れ端のこと。「尺楮」は紙の切れ端のこと。「楮」は和紙の原料に使われる植物。',
                        '【くはいしい】いつも着ている服装を変えれば疑われるのは当然であるということ。\n出典：『韓非子』説林･下．楊朱ようしゅの弟の楊布ようふが白衣で外出したところ雨に降られた。そこで黒い衣に着替えて帰ってくると楊布とは気づかずに飼い犬が吠えた。怒った楊布が犬を殴ろうとすると、楊朱は「白い犬が黒くなって帰ってきたら、お前も怪しむだろう」と言ったという説話から。',
                        '【びいとうしょく】美しい着物を好んで一時の食を貪って将来のことを考えないこと。\n出典	『漢書』「韓信伝」',
                        '【ほけんてきそ】志と行動が相反するたとえ。\n出典：『申鑒』「雑言・下」',
                        '【あくはつとほ】すぐれた人材を求めるのに熱心なこと\n出典：出典『韓詩外伝』三。「一沐三たび髪を握り、一飯三たび哺を吐きて猶お天下の士を失わんことを恐る」',
                      ];


const quizzesData: Record<GenreType, { quizzes: QuestionType[]; keywords: (string | number)[]; details?: string[] }> = {
  '数': { quizzes: quizzesNumber, keywords: keywordsNumber },
  '原子': { quizzes: quizzesElement, keywords: keywordsElement },
  '四字熟語': { quizzes: quizzes4Jukugo, keywords: keywords4Jukugo, details: details4Jukugo },
};

export default genres;
export { quizzesData };
export type { QuestionType, GenreType };
