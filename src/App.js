import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Question from './components/Question';

const apiFilter =
  '!6CZfOUCj48fOrIbLgFogKMsFRwU8PdzA3zenkBbaMaK6pMX(.RG7PtUSx*u';
function App() {
  const [responseTime, setResponseTime] = useState();
  const [tag, setTag] = useState();
  const [items, setItems] = useState([]);
  const toDate = Math.round(Date.now() / 1000);
  const fromDate = toDate - 604800;

  const search = async () => {
    let newest = [];
    let top = [];
    const startTime = Date.now();
    await axios
      .get(
        `https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=votes&tagged=${tag}&fromdate=${fromDate}&todate=${toDate}&filter=${apiFilter}&site=stackoverflow`
      )
      .then((response) => {
        newest = response.data.items;
      });
    await axios
      .get(
        `https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&tagged=${tag}&fromdate=${fromDate}&todate=${toDate}&filter=${apiFilter}&site=stackoverflow`
      )
      .then((response) => {
        top = response.data.items;
      });
    let tempItems = newest.concat(top);
    tempItems.sort((a, b) => b.creation_date - a.creation_date);
    setItems(tempItems);
    setResponseTime(((Date.now() - startTime) / 1000).toFixed(2));
  };

  const updateTag = (event) => {
    setTag(event.target.value);
  };

  return (
    <div className="App">
      <h1>COMP 4350 Assignment #1</h1>
      <h2>Caden Chabot</h2>
      <div className="searchContainer">
        <input
          className="search"
          defaultValue="Tag"
          value={tag}
          onChange={updateTag}
        />
        <button className="searchButton" onClick={search}>
          Search Stack Overflow
        </button>
      </div>
      {items.length !== 0 ? (
        <div className="resultsContainer">
          {items.map((item) => {
            return <Question props={item} />;
          })}
          <p>Response Time: {responseTime}s</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
