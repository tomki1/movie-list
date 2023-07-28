const express = require('express');
const router = require('./routes.js');
const db = require('./db/index.js')
const app = express();
const PORT = 3000 || process.env.PORT;


// Set up routes
app.use('/', router);
// serve the client files
app.use(express.static('client/dist'));

// for all other requests except get to /api/movies and /, respond with "Hello World"
app.all('/*', (req, res, next) => {
  // else respond with 'Hello World'
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})