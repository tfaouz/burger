console.log("server.js working fine");

var PORT = process.env.PORT || 3000;

var express = require("express");
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burger_routes.js');
app.use(routes);

app.listen(PORT, function () {
    console.log('Server listening on http://localhost:' + PORT);
});