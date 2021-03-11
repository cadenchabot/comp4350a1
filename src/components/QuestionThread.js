import Comment from './Comment';
import Answer from './Answer';

const QuestionThread = ({ question }) => {
  return (
    <div className="questionExpanded">
      <div
        className="questionBody"
        dangerouslySetInnerHTML={{ __html: question.body }}
      ></div>
      {question.comments?.length > 0 ? (
        <div className="questionCommentsContainer">
          <h1>Comments</h1>
          {question.comments?.map((comment, index) => {
            return <Comment key={index} comment={comment}></Comment>;
          })}
        </div>
      ) : null}
      {question.answers?.length > 0 ? (
        <div className="answersContainer">
          <h1>Answers</h1>
          {question.answers?.map((answer, index) => {
            return <Answer key={index} answer={answer}></Answer>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default QuestionThread;
