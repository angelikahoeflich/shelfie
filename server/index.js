require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
app.use(express.json());
const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
  connectionString: CONNECTION_STRING,

  ssl: {
    rejectUnauthorized:false
  }
}).then((db) => {
  app.set('db', db);
});

//endpoints


app.listen(SERVER_PORT, console.log('listening on da port'));