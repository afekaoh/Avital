const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors({
	'Access-Control-Allow-Origin': '*'
}
));

app.get('/', (req, res) => {
	res.send('hello world');
});



app.listen(8496, () => console.log('listening at localhost:8496'));



