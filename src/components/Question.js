import { useState } from 'react';
import QuestionThread from './QuestionThread';

const Question = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="questionContainer">
      <div
        onClick={() => {
          setExpanded(!expanded);
        }}
        key={props.props.question_id}
        className="questionHeader"
      >
        <div
          className="questionTitle"
          dangerouslySetInnerHTML={{ __html: props.props.title }}
        ></div>
        <p className="questionCreated">
          Created: {new Date(props.props.creation_date * 1000).toISOString()}
        </p>
        <p className="questionScore">Score: {props.props.score}</p>
      </div>
      {expanded ? <QuestionThread props={props.props}></QuestionThread> : null}
    </div>
  );
};

export default Question;
