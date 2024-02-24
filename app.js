const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/new", (req, res) => {
  res.send("I'm brand new!");
});

app.listen(port, () => console.log('Running my sweet code!'));
