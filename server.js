
var express = require("express");

// https://stackoverflow.com/questions/38306569/what-does-body-parser-do-with-express
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgerController.js");
app.use(routes);

app.listen(PORT);