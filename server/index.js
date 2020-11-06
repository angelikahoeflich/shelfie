const express = require('express');
const app = express();
app.use(express.json());

//endpoints


app.listen(4000, console.log('listening on da port'))