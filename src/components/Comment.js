const Comment = (props) => {
  return (
    <div className="commentContainer">
      <div className="commentHeader">
        <p>
          Created: {new Date(props.props.creation_date * 1000).toISOString()}
        </p>
        <p>Score: {props.props.score}</p>
      </div>
      <div
        className="commentBody"
        dangerouslySetInnerHTML={{ __html: props.props.body }}
      ></div>
    </div>
  );
};

export default Comment;
