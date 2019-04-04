var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
var path  = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, './routing/apiRoutes'))(app)
require(path.join(__dirname, './routing/htmlRoutes'))(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  