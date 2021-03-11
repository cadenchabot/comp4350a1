import './App.css';
import { useState } from 'react';
import Question from './components/Question';
import { getQuestions } from './utils/requestUtils';

function App() {
  const [responseTime, setResponseTime] = useState();
  const [tag, setTag] = useState('Tag');
  const [items, setItems] = useState([]);

  const search = async () => {
    if (tag !== '') {
      let request = await getQuestions(tag);
      setItems(request.items);
      setResponseTime(request.responseTime);
    }
  };

  const updateTag = (event) => {
    setTag(event.target.value || '');
  };

  return (
    <div className="App">
      <h1>COMP 4350 Assignment #1</h1>
      <h2>Caden Chabot</h2>
      <div className="searchContainer">
        <input className="search" value={tag} onChange={updateTag} />
        <button className="searchButton" onClick={search}>
          Search Stack Overflow
        </button>
      </div>
      {items.length !== 0 ? (
        <div className="resultsContainer">
          {items.map((item) => {
            return <Question key={item.question_id} question={item} />;
          })}
          <p>Response Time: {responseTime}s</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
