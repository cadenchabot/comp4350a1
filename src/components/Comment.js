const Comment = ({ comment }) => {
  return (
    <div className="commentContainer">
      <div className="commentHeader">
        <p>
          Created:{' '}
          {new Date(comment.creation_date * 1000)
            .toISOString()
            .replace(/T/, ' ') // replace T with a space
            .replace(/\..+/, '')}
        </p>
        <p>Score: {comment.score}</p>
      </div>
      <div
        className="commentBody"
        dangerouslySetInnerHTML={{ __html: comment.body }}
      ></div>
    </div>
  );
};

export default Comment;
