var Xray = require('x-ray');
var x = Xray();
var curl = require('curlrequest');

URL_ADEUDOS_TENENCIA = 'http://www.finanzas.df.gob.mx/consultas_pagos/consulta_adeudosten.php?consulta=Consulta+de+adeudos&wlplaca=';
URL_ADEUDO_TENENCIA = 'http://www.finanzas.df.gob.mx/formato_lc/lc_new/tenencia/calculo/validaPlaca'
URL_INFRACCIONES = 'http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=';
UNIDAD_CUENTA_PESOS = 71.68;

module.exports.scrapeVehiculo = function(placa, callback) {
  module.exports.scrapeAdeudosTenencias(placa, function(vehiculo){
    if(vehiculo.error) {
      callback({error: vehiculo.error});
      return;
    }
    module.exports.scrapeInfracciones(placa, function(infracciones){
      vehiculo.infracciones = infracciones
      adeudosTotales = adeudosTotales(vehiculo);
      vehiculo.monto_adeudo_tenencias = adeudosTotales.tenencias;
      vehiculo.monto_adeudo_infracciones = adeudosTotales.infracciones;
      vehiculo.monto_total_adeudos = adeudosTotales.infracciones;
      callback(vehiculo);
      return;
    });
  });
}

module.exports.scrapeAdeudosTenencias = function(placa, callback) {
  vehiculo = {}
  vehiculo.adeudos_tenencias = [];
  x(URL_ADEUDOS_TENENCIA + placa, '#tabla500 tr', [{
    ejercicio: 'td'
  }])(function(err, scraped) {
    scraped.shift() // Quita "Placa:"
    var strTieneAdeudos = scraped[0];
    if(/.*laca anterior *./.test(strTieneAdeudos.ejercicio)) {
      vehiculo.placa_anterior = strTieneAdeudos.ejercicio.substr(-6);
      scraped.shift();
      strTieneAdeudos = scraped[0];
    }
    if(/.*en el padr*./.test(strTieneAdeudos.ejercicio)) {
      callback({error: 'Placas no encontradas'})
      return;
    }
    if(/.*adeudos*./.test(strTieneAdeudos.ejercicio)) {
      callback(vehiculo);
      return;
    }
    else {
      scraped.forEach(function(ejercicioAdeudo, index, array) {
        var options = {
            url: URL_ADEUDO_TENENCIA,
            data: 'placa=' + placa + '&ejercicio=' + ejercicioAdeudo.ejercicio
        };
        curl.request(options, function (err, data) {
            data = JSON.parse(data);
            vehiculo.placa = data.placa;
            vehiculo.modelo = data.modelo;
            vehiculo.num_cilindros = parseInt(data.num_cilindros);
            if(data.procedencia == 'N') {
              vehiculo.procedencia_nacional = true;
            }
            else {
              vehiculo.procedencia_nacional = false;
            }
            vehiculo.valor_factura = parseFloat(data.valor_fact);
            vehiculo.fecha_factura = data.fech_factura;
            vehiculo.depreciacion = parseFloat(data.depresiacion);
            vehiculo.depreciacion_restante = vehiculo.valor_factura - vehiculo.depreciacion;

            adeudo = {};
            adeudo.ejercicio = data.ejercicio;
            adeudo.tenencia = parseFloat(data.tenencia);
            adeudo.subsidio = parseFloat(data.subsidio);
            adeudo.actualizacion = parseFloat(data.actualiza_ten);
            adeudo.recargo = parseFloat(data.recargo_ten);
            adeudo.condonacion_recargo = parseFloat(data.condonacion_recargo_ten) || 0;
            adeudo.total_tenencia = parseFloat(data.total_tenencia);
            adeudo.derecho = parseFloat(data.derecho);
            adeudo.actualiza_derecho = parseFloat(data.actuliza_derecho);
            adeudo.recargo_derecho = parseFloat(data.recargo_derecho);
            adeudo.total_derechos = parseFloat(data.total_derechos);
            adeudo.total_impuesto = parseFloat(data.total_impuesto);
            adeudo.total_derecho = parseFloat(data.total_derecho);
            adeudo.total_actualiza = parseFloat(data.total_actualiza);
            adeudo.total_recargo = parseFloat(data.total_recargo);
            adeudo.total = parseFloat(data.total);
            vehiculo.adeudos_tenencias.push(adeudo);
            if(index == array.length - 1) {
              callback(vehiculo);
            }
        });
      })
    }
  })
}

module.exports.scrapeInfracciones = function(placa, callback) {
  x(URL_INFRACCIONES + placa, '#tablaDatos', [{
    folio: 'tr td:nth-child(1)',
    fecha: 'tr td:nth-child(2)',
    situacion: 'tr td:nth-child(3)',
    motivo: 'font',
    fundamento: 'tr:nth-child(4) td:nth-child(2)',
    sancion: 'tr:nth-child(5) td:nth-child(2)',
  }])(function(err, infracciones) {
    // Sin adeudos!
    if(/.*adeudos*./.test(infracciones[infracciones.length - 1].folio)) {
      infracciones = [];
    }
    // Construye infracciones
    infracciones.forEach(function(infraccion) {
      var numeroUnidadesCuenta = parseInt(infraccion.sancion.substring(0,2));
      infraccion.monto_infraccion = truncaDecimales(numeroUnidadesCuenta * UNIDAD_CUENTA_PESOS);
      infraccion.pagada = false;
      if(infraccion.situacion.trim() == 'Pagada') {
        infraccion.pagada = true;
      }
      delete infraccion.sitacion;
    })
    callback(infracciones);
  })
}

function adeudosTotales(vehiculo) {
  var totalTenencias = 0;
  vehiculo.adeudos_tenencias.forEach(function(adeudo) {
    totalTenencias += adeudo.total;
  })
  var totalInfracciones = 0;
  vehiculo.infracciones.forEach(function(infraccion) {
    if(!infraccion.pagada) {
      totalInfracciones += infraccion.monto_infraccion;
    }
  })
  return {
    tenencias: truncaDecimales(totalTenencias),
    infracciones: truncaDecimales(totalInfracciones),
    total: truncaDecimales(totalTenencias + totalInfracciones)
  }
}

function truncaDecimales(numero) {
  return Math.floor(numero * 100) / 100
}
