import Comment from './Comment';
import Answer from './Answer';

const QuestionThread = (props) => {
  console.log(props);
  return (
    <div className="questionExpanded">
      <div
        className="questionBody"
        dangerouslySetInnerHTML={{ __html: props.props.body }}
      ></div>
      {props.props.comments?.length > 0 ? (
        <div className="questionCommentsContainer">
          <h1>Comments</h1>
          {props.props.comments?.map((comment) => {
            return <Comment props={comment}></Comment>;
          })}
        </div>
      ) : null}
      {props.props.answers?.length > 0 ? (
        <div className="answersContainer">
          <h1>Answers</h1>
          {props.props.answers?.map((answer) => {
            return <Answer props={answer}></Answer>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default QuestionThread;
