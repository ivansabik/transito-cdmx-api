#!/usr/bin/env node
var program = require('commander');
var scraper = require('./lib/scraper');

program
  .version('0.0.1')
  .option('-p, --placas', 'Placas')
  .option('-t, --tenencias', 'Muestra sólo adeudos de tenencias')
  .option('-i, --infracciones', 'Muestra sólo infracciones')
  .option('-o, --output', 'Ruta para guardar en JSON')
  .parse(process.argv);

if (!program.placas) {
  console.log('Es necesario el argumento -p ó --placas con el número de placas');
  process.exit()
}

if (program.adeudos) {
  scraper.scrapeAdeudosTenencias(program.args[0], function(vehiculo) {
    console.log(vehiculo.adeudos_tenencias);
    process.exit()
  })
}
else if (program.infracciones) {
  scraper.scrapeInfracciones(program.args[0], function(infracciones) {
    console.log(infracciones);
    process.exit()
  })
}
else {
  scraper.scrapeVehiculo(program.args[0], function(vehiculo) {
    console.log(vehiculo);
  })
}
