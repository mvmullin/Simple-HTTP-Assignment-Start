// import textResponses
const text = require('./textResponses.js');

// function to send a JSON object hello message to the client
const getHelloJSON = (request, response) => {
  // create a json object from textResponses variable
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON); // HTTP response needs to be text

  response.writeHead(200, { 'Content-Type': 'application.json' }); // status code and headers to send
  response.write(stringMessage); // JSON object as string to send
  response.end(); // send response
};

// function to send a JSON object time to the client
const getTimeJSON = (request, response) => {
  // create a json object from textResponses variable
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON); // HTTP response needs to be text

  response.writeHead(200, { 'Content-Type': 'application.json' }); // status code and headers to send
  response.write(stringMessage); // JSON object as string to send
  response.end(); // send response
};

// add variables to exports
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
