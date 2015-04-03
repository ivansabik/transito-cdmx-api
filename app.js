var express = require('express');
var app = express();
var corralones = require('./lib/corralones');
var verificentros = require('./lib/verificentros');

app.disable('x-powered-by');

app.get('/api/vehiculos/:placas', function (req, res) {
  res.send('Info de vehiculo');
});

app.get('/api/verificentros', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(verificentros);
});

app.get('/api/corralones', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(corralones);
});

app.use(function(req, res){
  res.status(404);
  res.set('Content-Type', 'application/json');
  res.send({error: 'No existe la ruta'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('API de Transito DF en http://%s:%s', host, port);
});

module.exports = server;
