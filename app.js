/* api-football key a2994c55ccmsh52c97e939e28026p1ac42djsn3342553e6cbb
https://rapidapi.com/api-sports/api/api-football-beta
*/

const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const datepicker = require('js-datepicker')

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res){	
	res.render('home');
})

app.get('/league-tables', function(req, res){
	res.render('league-tables');
})

app.get('/login', function(req, res){
	res.render('login');
})

app.listen(8080, () => {
	console.log('Serving on port 8080')
})