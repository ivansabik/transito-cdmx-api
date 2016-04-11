var Xray = require('x-ray');
var x = Xray();
var curl = require('curlrequest');

URL_ADEUDOS_TENENCIA = 'http://www.finanzas.df.gob.mx/consultas_pagos/consulta_adeudosten.php?consulta=Consulta+de+adeudos&wlplaca=';
URL_ADEUDO_TENENCIA = 'http://www.finanzas.df.gob.mx/formato_lc/lc_new/tenencia/calculo/validaPlaca'
URL_INFRACCIONES = 'http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=';

scrapeAdeudos('902TER', function(adeudos){ console.log(adeudos) });
scrapeInfracciones('908WEG', function(infracciones){ console.log(adeudos) });

function scrapeAdeudos(placa, callback) {
  vehiculo = {}
  x(URL_ADEUDOS_TENENCIA + placa, '#tabla500 tr', [{
    ejercicio: 'td'
  }])(function(err, scraped) {
    scraped.shift() // Quita "Placa:"
    var strTieneAdeudos = scraped[0];
    sinAdeudos = /.*adeudos*./.test(strTieneAdeudos['ejercicio']);
    if(sinAdeudos) {
      console.log('No tiene adeudos')
    }
    else {
      adeudos = [];
      scraped.forEach(function(ejercicioAdeudo) {
        var options = {
            url: URL_ADEUDO_TENENCIA,
            data: 'placa=' + placa + '&ejercicio=' + ejercicioAdeudo['ejercicio']
        };
        curl.request(options, function (err, data) {
            data = JSON.parse(data);
            vehiculo.placa = data['placa'];
            vehiculo.modelo = data['modelo'];
            vehiculo.num_cilindros = data['num_cilindros'];
            vehiculo.procedencia = data['procedencia'];
            vehiculo.valor_factura = parseFloat(data['valor_fact']);
            vehiculo.fecha_factura = data['fech_factura'];
            vehiculo.depreciacion = data['depresiacion'];

            adeudo = {};
            adeudo.ejercicio = data['ejercicio'];
            adeudo.tenencia = parseFloat(data['tenencia']);
            adeudo.subsidio = parseFloat(data['subsidio']);
            adeudo.actualizacion = parseFloat(data['actualiza_ten']);
            adeudo.recargo = parseFloat(data['recargo_ten']);
            adeudo.condonacion_recargo = parseFloat(data['condonacion_recargo_ten']);
            adeudo.total_tenencia = parseFloat(data['total_tenencia']);
            adeudo.derecho = parseFloat(data['derecho']);
            adeudo.actualiza_derecho = parseFloat(data['actuliza_derecho']);
            adeudo.recargo_derecho = parseFloat(data['recargo_derecho']);
            adeudo.total_derechos = parseFloat(data['total_derechos']);
            adeudo.total_impuesto = parseFloat(data['total_impuesto']);
            adeudo.total_derecho = parseFloat(data['total_derecho']);
            adeudo.total_actualiza = parseFloat(data['total_actualiza']);
            adeudo.total_recargo = parseFloat(data['total_recargo']);
            adeudo.total = parseFloat(data['total']);

            adeudos.push(adeudo);

            callback(adeudos);
        });
      })
    }
  })
}

function scrapeInfracciones(placa, callback) {
  x(URL_INFRACCIONES + placa, '#tablaDatos', [{
    folio: 'tr td:nth-child(1)',
    fecha: 'tr td:nth-child(2)',
    situacion: 'tr td:nth-child(3)',
    motivo: 'font',
    fundamento: 'tr:nth-child(4) td:nth-child(2)',
    sancion: 'tr:nth-child(5) td:nth-child(2)',
  }])(function(err, infracciones) {
    callback(infracciones);
  })
}
