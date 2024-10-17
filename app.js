const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get("/now", (req, res) => {
  res.send("Giving a demo, hope it goes well")
})

app.listen(port, () => console.log('Running my sweet code!'));
