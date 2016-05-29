#!/usr/bin/env node
var program = require('commander');
var scraper = require('./lib/scraper');

program
    .version('0.0.1')
    .option('-p, --placas', 'Placas')
    .option('-o, --output', 'Ruta para guardar en JSON')
    .parse(process.argv);

if (!program.placas) {
    console.log('Es necesario el argumento -p ó --placas con el número de placas');
    process.exit()
}

scraper.scrapeVehiculo(program.args[0], function(vehiculo) {
    console.log(vehiculo);
})
