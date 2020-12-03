const request = require('request');
const breed = process.argv[2];

const url = "https://api.thecatapi.caaaaaaaa/v1/breeds/search?q=";

const breedURL = `${url}${breed}`;

request(breedURL, (error, response, body) => {  
  if (error) {
    console.log('URL invalid!', error);
  } else {
    if (data[0] === undefined) {
      console.log(`Value does not exist!`);
    }  else {
      const data = JSON.parse(body);  // convert string to object
      console.log(data[0].description); // printout value of the key description
    }
  }
});