// pull in the file system module
const fs = require('fs');

// read files in synchronously with fs (__dirname is a node global for the current directory)
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// function to send client.html to the client
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // status code and headers to send
  response.write(index); // client.html content to send
  response.end(); // send response
};

// function to send client2.html to the client
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // status code and headers to send
  response.write(page2); // client2.html content to send
  response.end(); // send response
};

// add functions to Node's export module to make public
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
