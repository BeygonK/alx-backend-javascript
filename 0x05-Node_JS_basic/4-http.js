const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header for plain text
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body
  res.end('Hello Holberton School!');
});

// The server listens on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for use in other files
module.exports = app;
