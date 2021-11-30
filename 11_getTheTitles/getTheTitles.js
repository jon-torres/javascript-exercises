const getTheTitles = (array) => {
  return array.map((book) => book.title);
};

// alternative way
// const getTheTitles = (array) => array.map((book) => `${book.title}`);

// Do not edit below this line
module.exports = getTheTitles;
