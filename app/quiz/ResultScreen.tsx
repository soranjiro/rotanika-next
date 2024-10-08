import Link from "next/link";

interface ResultScreenProps {
  isCorrect: boolean;
  keyword: string | undefined;
  finalAnswer: string | undefined;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ isCorrect, keyword, finalAnswer }) => {
  return (
    <div className="result-container">
      <h1 className="result-title">
        {isCorrect ? "正解！" : "不正解..."}
      </h1>
      <h2 className="result-subtitle">あなたのお題: {keyword}</h2>
      <h2 className="result-subtitle">Rotanikaの答え: {isCorrect ? finalAnswer : "xxx"}</h2>
      <Link href="/" passHref legacyBehavior>
        <a className="result-link">
          ホームに戻る
        </a>
      </Link>
    </div>
  );
};

export default ResultScreen;
