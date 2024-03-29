var express = require("express");

var app = express();
app.use(express.logger());

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/app');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/app'));
  app.use(app.router);
  app.engine('html', require('ejs').renderFile);
});

app.get('/', function(request, response) {
  response.render('index.html')
});

app.use('/', express.static(__dirname + '/bower_components'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
