require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const cors = require('cors');
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;


app.use(express.json());
app.use(cors());

massive({
  connectionString: CONNECTION_STRING,

  ssl: {
    rejectUnauthorized:false
  }
}).then((db) => {
  app.set('db', db)
  console.log('db connected');
}).catch((err) => console.log(err));

//endpoints

app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.newProduct);
app.delete('/api/product/:id', ctrl.deleteProduct);
app.put('/api/product/:id', ctrl. editProduct);


app.listen(SERVER_PORT, () => console.log(`listening on da port ${SERVER_PORT}`));