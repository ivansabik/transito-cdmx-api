var assert = require('assert') //var assert = require('assert-diff')
var fs = require('fs');
var scraper = require('../lib/scraper.js');
var fixtures = require('./fixtures');
var nock = require('nock');

describe('Scraper', function(){
  it('should create scrapped objects with info based on a search pattern', function(done) {
    fs.readFile(__dirname + '/fixtures-html/detallePlaca.php?placa=183YTP.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      var testPattern = {
        folio: /[0-9]{11}/,
        fecha: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
        situacion: /.*agada/i,
        motivo: /POR.*/,
        fundamento: /Art.*/i,
        sancion: /.*as de salario m.*/i
      };
      var testOptions = {
        pattern: testPattern,
        url: 'http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=183YTP',
        searchElement: 'td'
      }
      scraper.scrape(testOptions, function(response) {
        assert.deepEqual(fixtures.scrapeInfracciones, response);
        done();
      });
    });
  });

  it('should throw error when callback is not a function', function() {
    var testFunction = function(){scraper.scrape(null, callback='console')};
    assert.throws(testFunction, Error, 'Callback is not a function!');
  });

  it('should remove whitespaces', function(done) {
    fs.readFile(__dirname + '/fixtures-html/detallePlaca.php?placa=183YTP.html', 'utf8', function(err, html){
      var testPattern = {
        situacion: /.*agada/i
      };
      var testOptions = {
        pattern: testPattern,
        url: 'http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=183YTP',
        html: '<div><span>  Con espacios  </span></div>'
      }
      scraper.scrape(testOptions, function(response) {
        assert.deepEqual({situacion: 'Con espacios'}, response.pop());
        done();
      });
    });
  });

  it('should throw error if pattern is not valid regexp', function() {
    fs.readFile(__dirname + '/fixtures-html/detallePlaca.php?placa=183YTP.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      var testPattern = {
        testNotValidRegex: 'NOT VALID'
      };
      var testOptions = {
        pattern: testPattern
      }
      var testFunction = function(){scraper.scrape(testOptions)};
      assert.throws(testFunction, Error, 'Pattern contains invalid regexp!');
    });
  });

  it('should scrape from html string without making http requests', function(done) {
    fs.readFile(__dirname + '/fixtures-html/detallePlaca.php?placa=183YTP.html', 'utf8', function(err, html){
      nock('http://www.finanzas.df.gob.mx')
        .get('/sma/detallePlaca.php?placa=183YTP')
        .reply(200, html);
      var testPattern = {
        situacion: /.*agada/i
      };
      var testOptions = {
        pattern: testPattern,
        url: 'http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=183YTP',
        html: html
      }
      scraper.scrape(testOptions, function(response) {
        assert.equal(false, mockHttp.isDone());
        done();
      });
    });
  });
});
