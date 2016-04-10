var Xray = require('x-ray');
var x = Xray();

URL_CON_ADEUDOS = 'http://www.finanzas.df.gob.mx/consultas_pagos/consulta_adeudosten.php?wlplaca=912TER&consulta=Consulta+de+adeudos';
URL_SIN_ADEUDOS = 'http://www.finanzas.df.gob.mx/consultas_pagos/consulta_adeudosten.php?wlplaca=608YVV&consulta=Consulta+de+adeudos';

x(URL_SIN_ADEUDOS, '#tabla500 tr', [{
  ejercicio: 'td'
}])(function(err, obj) {
  obj.shift() // Quita Placa:
  var strTieneAdeudos = obj.shift()['ejercicio'];
  sinAdeudos = /.*adeudos*./.test(strTieneAdeudos);

  if(sinAdeudos)
    console.log('No tiene adeudos')
  else
    console.log(obj);
})
