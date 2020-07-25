const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res, next) => {
	res.render('index', {
		pageTitle: 'Home Page'
	});
});

app.listen(3000, () => {
	console.log('Blog App listening on port', 3000);
});