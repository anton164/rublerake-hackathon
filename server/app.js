const express = require('express');
const app = express();

const statusEndpoint = require('./endpoints/status');

app.use(statusEndpoint);

app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
})
