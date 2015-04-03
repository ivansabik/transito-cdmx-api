var assert = require('assert-diff')
var fs = require('fs');
var http = require('http');
var fixtures = require('./fixtures');
var nock = require('nock');
var app = require('../app.js');
request = require('request-json');
var client = request.createClient('http://localhost:3000/');

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
      var mockHttp = nock('http://www.finanzas.df.gob.mx')
					.persist()
					.get('/sma/detallePlaca.php?placa=183YTP')
					.reply(200, html);
      client.get('api/vehiculos/183YTP', function(err, res, body) {
        assert.deepEqual(fixtures.vehiculo, body);
        done();
      });
    });
  });
  
  it('should get verificentros information', function(done) {
    client.get('api/verificentros', function(err, res, body) {
        assert.deepEqual(fixtures.verificentros, body);
        done();
    });
  });
  
  it('should get corralones information', function(done) {
    client.get('api/corralones', function(err, res, body) {
        assert.deepEqual(fixtures.corralones, body);
        done();
    });
  });
});
