// require in libraries
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// create our server
const app = express();
const port = process.env.PORT || 3000;

// handle incoming objects
app.use(bodyParser());
app.use(cookieParser());
// handles post data
app.use(bodyParser.urlencoded({ extended: true }));

/* Handles getting data and send it back to clients */
app.get('/test', (req, res) => {
  const { url } = req.body;
  fetch(url)
    .then(data => data.json())
    .then(e => res.send(e));
});

app.post('/search', (req, res) => {
  console.log('/SEARCH POST REQUEST IN SERVER \n req.body ===', req.body);
});

// TO GENERATE CODE app.post('/code', )

// serves PRODUCTION bundle
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

// serves static developemnt files (/public) - DEV
app.use('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// sets development port
app.listen(port, () => console.log(`listening on port ${port}`));
