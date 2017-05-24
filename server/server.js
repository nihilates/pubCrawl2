const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../client')));

const port = 8080;

app.listen(port);
console.log("The Hearth is Roaring on port", port);