var express = require('express')
var path = require('path')
var compression = require('compression');
var proxy = require('proxy-middleware');
var backApi = require("./process.json");

var app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'build')))

// send all requests to index.html so browserHistory works
app.use('/emaCat', proxy(backApi['production']["emaCat"]));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

var PORT = process.env.PORT || 9001
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
