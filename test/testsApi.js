var assert = require('assert') //var assert = require('assert-diff')
var fs = require('fs');
var http = require('http');
var fixtures = require('./fixtures');
var nock = require('nock');
var app = require('../app');
var request = require('request-json');
var client = request.createClient('http://localhost:3000/');
var corralones = require('../lib/corralones');
var verificentros = require('../lib/verificentros');

describe('API', function(){
  after(function (done) {
    app.close();
    done();
  });
 
  it('should be listening at localhost:3333', function (done) {
    http.get('http://localhost:3000/', function (res) {
      assert.equal(res.statusCode, 404);
      done();
    });
  });
  
  it('should get car information', function(done) {
    fs.readFile(__dirname + '/fixtures-html/detallePlaca.php?placa=183YTP.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      client.get('api/vehiculos/183YTP', function(err, res, body) {
        assert.deepEqual(fixtures.vehiculo, body);
        done();
      });
    });
  });
  
  it('should be able to detect car not found in database', function(done) {
    fs.readFile(__dirname + '/fixtures-html/detallePlaca.php?placa=154DBH.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      client.get('api/vehiculos/154DBH', function(err, res, body) {
        assert.deepEqual({error: 'El número de placa no se localizo en el padrón!'}, body);
        done();
      });
    });
  });
  
  it('should get verificentros information', function(done) {
    client.get('api/verificentros', function(err, res, body) {
        assert.deepEqual(verificentros, body);
        done();
    });
  });
  
  it('should get corralones information', function(done) {
    client.get('api/corralones', function(err, res, body) {
        assert.deepEqual(corralones, body);
        done();
    });
  });
});
