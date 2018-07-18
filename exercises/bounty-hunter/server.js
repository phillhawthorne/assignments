const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = 8090;

const app = express();
app.use(bodyParser.json());



app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));