const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello Wrold");
});

app.get("/about", (req, res) => {
  res.send("About Me");
})

app.get("/now", (req, res) => {
  res.send("Giving a demo, hope it goes ok")
})

app.listen(port, () => console.log('Running my sweet code!'));
