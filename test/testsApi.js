var assert = require('assert') //var assert = require('assert-diff')
var fs = require('fs');
var http = require('http');
var fixtures = require('./fixtures');
var nock = require('nock');
var app = require('../app');
var request = require('request-json');
var client = request.createClient('http://localhost:3000/api/v1/');

describe('API', function(){
  after(function (done) {
    app.close();
    done();
  });

  it('obtener informacion general de un vehiculo', function(done) {
    fs.readFile(__dirname + '/fixtures_html/vehiculo_infracciones_adeudos.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      client.get('vehiculos/183YTP', function(err, res, body) {
        assert.fail('Terminar test');
        done();
      });
    });
  });

  it('obtener infracciones de un vehiculo', function(done) {
    fs.readFile(__dirname + '/fixtures_html/vehiculo_infracciones_adeudos.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      client.get('vehiculos/183YTP', function(err, res, body) {
        assert.fail('Terminar test');
        done();
      });
    });
  });

  it('obtener adeudos de un vehiculo', function(done) {
    fs.readFile(__dirname + '/fixtures_html/vehiculo_infracciones_adeudos.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      client.get('vehiculos/183YTP', function(err, res, body) {
        assert.fail('Terminar test');
        done();
      });
    });
  });

  it('obtener error cuando no se encuentra la placa en padron', function(done) {
    fs.readFile(__dirname + '/fixtures_html/vehiculo_no_en_padron.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      client.get('vehiculos/154DBH', function(err, res, body) {
        assert.fail('Terminar test');
        done();
      });
    });
  });

  it('obtener estado de sin infracciones', function(done) {
    fs.readFile(__dirname + '/fixtures_html/vehiculo_sin_infracciones.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      client.get('vehiculos/183YTP', function(err, res, body) {
        assert.fail('Terminar test');
        done();
      });
    });
  });

  it('obtener estado de no adeudos de tenencias de un vehiculo', function(done) {
    fs.readFile(__dirname + '/fixtures_html/vehiculo_sin_adeudos_tenencia.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=908WEG')
        .reply(200, html);
      client.get('vehiculos/183YTP', function(err, res, body) {
        assert.fail('Terminar test');
        done();
      });
    });
  });

  it('obtener placa anterior de un vehículo', function(done) {
    fs.readFile(__dirname + '/fixtures_html/vehiculo_placa_anterior.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=685UYK')
        .reply(200, html);
      client.get('vehiculos/183YTP', function(err, res, body) {
        assert.fail('Terminar test');
        done();
      });
    });
  });
});
