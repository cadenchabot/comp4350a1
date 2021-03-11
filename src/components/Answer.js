import Comment from './Comment';

const Answer = (props) => {
  return (
    <div className="answerContainer">
      <div className="answerHeader">
        <p>Answer</p>
        <p>
          Created: {new Date(props.props.creation_date * 1000).toISOString()}
        </p>
        <p>Score: {props.props.score}</p>
      </div>
      <div
        className="answerBody"
        dangerouslySetInnerHTML={{ __html: props.props.body }}
      ></div>
      {props.props.comments?.length > 0 ? (
        <div className="answerCommentsContainer">
          <h1>Comments</h1>
          {props.props.comments?.map((comment) => {
            return <Comment props={comment}></Comment>;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Answer;
