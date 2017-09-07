const hello = 'Hello World';

// function to get the time as a string
const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

// function to send the time to the client
const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

// function to send hello message to the client
const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

// add variables to exports
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
