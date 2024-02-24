const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

console.log('Making a change');

app.listen(port, () => console.log('Running my sweet code!'));
