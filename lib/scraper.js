var xray = require('x-ray');

var defaultCallback = function(response){console.log(response)};

module.exports.scrape = function(options, callback) {
	if (typeof options === 'undefined') { options = {}; }
	if (typeof callback === 'undefined') { callback = defaultCallback; }
	if (typeof(callback) !== 'function') { throw new Error('Callback is not a function!'); }
	var pattern = options.pattern;
	var url = options.url;
	xray(url)
	  .select([{
		  $root: options.root,
		  arregloTds: options.searchElement
	  }])
	  .run(function(error, scraped) {
		var infracciones = [];
		scraped.forEach(function(tds) {
		  var infraccion = {};
		  tds.arregloTds.forEach(function(td) {
			pattern.folio.test(td) ? infraccion.folio = td : null;
			pattern.fecha.test(td) ? infraccion.fecha = td : null;
			pattern.situacion.test(td) ? infraccion.situacion = td : null;
			pattern.motivo.test(td) ? infraccion.motivo = td : null;
			pattern.fundamento.test(td) ? infraccion.fundamento = td : null;
			pattern.sancion.test(td) ? infraccion.sancion = td : null;
		  })
		  infraccion ? infracciones.push(infraccion): null;
		})
		console.log('--------');
		callback(infracciones);
		console.log('--------');
	  });
}
