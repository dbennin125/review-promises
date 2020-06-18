const request = require('superagent');

const getQuote = id => {
  return request
    .get(`http://futuramaapi.herokuapp.com/api/quotes/${id}`)
    .then(({ body }) => console.log(body[0].quote));
};

getQuote(5);
getQuote(7);
getQuote(7);
