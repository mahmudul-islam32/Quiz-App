function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage <= 100) emoji = "👍";
  if (percentage < 80) emoji = "😔";
  if (percentage === 0) emoji = "😖";

  return (
    <>
      <p className="result">
        <strong>{emoji}</strong> you scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore is {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart The Quiz
      </button>
    </>
  );
}

export default FinishScreen;
