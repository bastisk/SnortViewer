let express = require('express');
let fs = require('fs');
let app = express();
let config = require('./config');

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')


app.get('/', function (req, res) {

  fs.readFile(config.log_path, 'UTF8', function(err, data){
    let output = [];
    let split = data.split("\r\n\r\n");
    for(var i = 0; i < split.length - 1; i++){
      output.push({id: i, message: split[i]});
    }

    res.render('index', {alerts: output.reverse()});

  });
});

app.get('/api', function (req, res) {

  fs.readFile(config.log_path, 'UTF8', function(err, data){
    let output = [];
    let split = data.split("\r\n\r\n");
    for(var i = 0; i < split.length - 1; i++){
      output.push({id: i, message: split[i]});
    }

    res.send(output);

  });
});

app.listen(3000, function () {
  console.log('Open at Port 3000')
})

