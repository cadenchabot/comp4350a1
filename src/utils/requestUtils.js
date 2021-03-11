import axios from 'axios';

const apiFilter =
  '!6CZfOUCj48fOrIbLgFogKMsFRwU8PdzA3zenkBbaMaK6pMX(.RG7PtUSx*u';

export const getQuestions = async (tag) => {
  const toDate = Math.round(Date.now() / 1000);
  const fromDate = toDate - 604800;
  let newest = [];
  let top = [];
  const startTime = Date.now();
  await axios
    .get(
      `https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=votes&tagged=${tag}&fromdate=${fromDate}&todate=${toDate}&filter=${apiFilter}&site=stackoverflow`
    )
    .then((response) => {
      top = response.data.items;
    })
    .catch((err) => {
      alert(err);
    });
  await axios
    .get(
      `https://api.stackexchange.com/2.2/questions?page=1&pagesize=10&order=desc&sort=creation&tagged=${tag}&fromdate=${fromDate}&todate=${toDate}&filter=${apiFilter}&site=stackoverflow`
    )
    .then((response) => {
      newest = response.data.items;
    })
    .catch((err) => {
      alert(err);
    });
  let items = mergeLists(newest, top);
  let responseTime = ((Date.now() - startTime) / 1000).toFixed(2);
  return { items, responseTime };
};

const mergeLists = (newest, top) => {
  let tempItems = newest.concat(top);
  tempItems.sort((a, b) => b.creation_date - a.creation_date);
  let uniqueItems = [];
  let tempSet = new Set();
  uniqueItems = tempItems.filter(
    (item) => !tempSet.has(item.question_id) && tempSet.add(item.question_id)
  );
  return uniqueItems;
};
