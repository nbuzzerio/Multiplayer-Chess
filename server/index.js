const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

app.use(express.static('./client/dist'));







const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`The server is Running on port ${port}!`))