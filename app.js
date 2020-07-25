const express = require('express');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route Handling
app.use(indexRouter);
app.use(errorController); 

app.listen(3000, () => {
	console.log('Blog App listening on port', 3000);
});