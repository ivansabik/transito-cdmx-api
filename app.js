var express = require('express');
var app = express();

app.get('/api/vehiculos/:placas', function (req, res) {
  res.send('Info de vehiculo');
});

app.get('/api/verificentros', function (req, res) {
  res.send('Verificentros');
});

app.get('/api/corralones', function (req, res) {
  res.send('Corralones');
});

app.use(function(req, res){
  res.status(404);
  res.send({error: 'No existe la ruta'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('API de Transito DF en http://%s:%s', host, port);
});

module.exports = server;
