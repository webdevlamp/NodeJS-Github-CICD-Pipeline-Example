const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.send("Hello World!");
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

module.exports = app;