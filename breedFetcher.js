const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = "https://api.thecatapi.com/v1/breeds/search?q=";
  const breedURL = `${url}${breedName}`;

  request(breedURL, (error, response, body) => {
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);
    if (!data[0]) {
      callback(`Value does not exist!`);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };


