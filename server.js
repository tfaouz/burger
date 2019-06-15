console.log("server.js working fine");

var express = require("express");
var exphbs = require('express-handlebars');
// sets handlebars //
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(express.static("public"));

app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Server listening on http://localhost:' + PORT);
});