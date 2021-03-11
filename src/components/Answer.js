import Comment from './Comment';

const Answer = ({ answer }) => {
  return (
    <div className="answerContainer">
      <div className="answerHeader">
        <p>Answer</p>
        <div className="answerInfo">
          <p>
            Created:{' '}
            {new Date(answer.creation_date * 1000)
              .toISOString()
              .replace(/T/, ' ') // replace T with a space
              .replace(/\..+/, '')}
          </p>
          <p>Score: {answer.score}</p>
        </div>
      </div>
      <div
        className="answerBody"
        dangerouslySetInnerHTML={{ __html: answer.body }}
      ></div>
      {answer.comments?.length > 0 ? (
        <div className="answerCommentsContainer">
          <h1>Comments</h1>
          {answer.comments?.map((comment, index) => {
            return <Comment key={index} comment={comment}></Comment>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Answer;
