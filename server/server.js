const express = require('express');
const app = express();
app.listen(8496, () => console.log('listening at localhost:8496'));
app.use(express.static('public'));

