require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
app.use(express.json());

//endpoints


app.listen(4000, console.log('listening on da port'));