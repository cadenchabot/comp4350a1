import { useState } from 'react';
import QuestionThread from './QuestionThread';

const Question = ({ question }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="questionContainer">
      <div
        onClick={() => {
          setExpanded(!expanded);
        }}
        key={question.question_id}
        className="questionHeader"
      >
        <div
          className="questionTitle"
          dangerouslySetInnerHTML={{ __html: question.title }}
        ></div>
        <div className="questionInfo">
          <p className="questionCreated">
            Created:{' '}
            {new Date(question.creation_date * 1000)
              .toISOString()
              .replace(/T/, ' ') // replace T with a space
              .replace(/\..+/, '')}
          </p>
          <p className="questionScore">Score: {question.score}</p>
        </div>
      </div>
      {expanded ? <QuestionThread question={question}></QuestionThread> : null}
    </div>
  );
};

export default Question;
