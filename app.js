const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.get("/about", (req, res) => {
  res.send("About Me");
})

app.listen(port, () => console.log('Running my sweet code!'));
