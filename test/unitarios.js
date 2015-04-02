var assert = require('assert');
var scraper = require('../lib/scraper.js');
var logger = require('../lib/logger.js');
var fixtures = require('./fixtures');

// TODO: Isolate HTTP requests or mock response

describe('Scraper', function(){
    it('should create scrapped objects with info based on a search pattern', function() {
      var patternInfracciones = {
        folio: /[0-9]{11}/,
        fecha: /[0-9]{4}-[0-9]{2}-[0-9]{2}/,
        situacion: /.*agada/i,
        motivo: /POR.*/,
        fundamento: /Art.*/i,
        sancion: /.*as de salario m.*/i
      };
      var placa = '183YTP';
      var options = {
        root: '#tablaDatos',
        pattern: patternInfracciones,
        placa: '183YTP',
        url: 'http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=' + placa,
        searchElement: 'td'
      }
      var scraped = scraper.scrape(options);
      assert.deepEqual(fixtures.scrapeInfracciones, scraped);
    });
    
    it('should throw error when callback is not a function', function() {
		var testFunction = function(){scraper.scrape(null, callback='console')};
		assert.throws(testFunction, Error, 'Callback is not a function!');
	});
});
