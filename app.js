var express = require('express');
var app = express();
var corralones = require('./lib/corralones');
var verificentros = require('./lib/verificentros');
var scraper = require('./lib/scraper');

URL_API = '/api/v1'

app.disable('x-powered-by');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get(URL_API + '/vehiculos/:placas', function (req, res) {
  res.set('Content-Type', 'application/json');
  var placas = req.params.placas;
  scraper.scrapeVehiculo(placas.toUpperCase(), function(vehiculo) {
    res.send(vehiculo);
  })
});

app.get(URL_API + '/verificentros', function (req, res) {
  res.set('Content-Type', 'application/json');
  var placas = req.params.placas;
  scraper.scrapeVehiculo(placas, function(vehiculo) {
    res.send(vehiculo);
  })
});

app.get(URL_API + '/corralones', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send(corralones);
});

app.use(function(req, res){
  res.status(404);
  res.set('Content-Type', 'application/json');
  res.send({error: 'No existe el endpoint'});
});

var server = app.listen(3000, function () {
  console.log('API de Transito CDMX corriendo en puerto 3000');
});

module.exports = server;
