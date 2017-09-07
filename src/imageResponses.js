// pull in the file system module
const fs = require('fs');

// read file in synchronously with fs (__dirname is a node global for the current directory)
const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// function to send spongegar to the client
const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' }); // status code and headers to send
  response.write(image); // image to send
  response.end(); // send response
};

// add functions to Node's export module to make public
module.exports.getImage = getImage;
