import Link from "next/link";

interface ResultScreenProps {
  isCorrect: boolean;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ isCorrect }) => {
  return (
    <div className="result-container">
      <h1 className="result-title">
        {isCorrect ? "正解！" : "不正解..."}
      </h1>
      <Link href="/" passHref legacyBehavior>
        <a className="result-link">
          ホームに戻る
        </a>
      </Link>
    </div>
  );
};

export default ResultScreen;
