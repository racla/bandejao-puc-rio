var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// Resources (CSS, images, js, fonts)
app.use(express.static(__dirname + '/resources'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/horarios', function(request, response){
  response.render('pages/schedules');
});

app.get('/precos', function(request, response){
  response.render('pages/prices');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


