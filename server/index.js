const express = require('express');
const router = require('./routes.js');
const app = express();
const PORT = 3000 || process.env.PORT;


// for all other requests except get to /api/movies, respond with "Hello World"
app.all('/*', (req, res, next) => {
  // if request is a GET to /api/movies pass control
  if (req.url === '/api/movies' && req.method === 'GET') {
    return next(); // pass control to the next handler
  } else {
  // else respond with 'Hello World'
  res.send('Hello World');
  }
})

// Set up routes
app.use('/', router);
// serve the client files
app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})