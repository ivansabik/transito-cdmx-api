var frisby = require('frisby');
var fs = require('fs');
var nock = require('nock');

URL_FINANZAS = 'http://www.finanzas.df.gob.mx';
URL_API = 'http://localhost:3000/api/v1';

frisby.create('Obtener infracciones de un vehiculo con infracciones')
    .get(URL_API + '/vehiculos/183YTP/infracciones')
    .expectJSON('infracciones.?', {
        folio: '03038482657',
        fecha: '2013-09-06',
        situacion: 'Pagada ',
        motivo: 'POR NO RESPETAR LOS LÍMITES DE VELOCIDAD ESTABLECIDOS EN VÍAS PRIMARIAS, EN CASO DE NO HABER SEÑALAMIENTO   LA VELOCIDAD MÁXIMA SERÁ DE 70 KILÓMETROS POR HORA',
        fundamento: 'Artículo: 5, Fracción: V, Parrafo: , Inciso: A',
        sancion: '5 unidades de cuenta',
        //sancion: '5 días de salario mínimo',
        monto_infraccion: 358.4,
        pagada: true
    })
    .expectJSON('infracciones.?', {
        folio: '04144419377',
        fecha: '2014-07-11',
        situacion: 'Pagada ',
        motivo: 'POR NO AJUSTARSE EL CINTURÓN DE SEGURIDAD Y ASEGURARSE QUE LOS DEMÁS PASAJEROS TAMBIÉN SE LO AJUSTEN, CUANDO SE TRATE DE MENORES DE 12 AÑOS O PERSONAS CON DISCAPACIDAD, DEBERÁN SER TRANSPORTADOS UTILIZANDO LOS SISTEMAS DE RETENCIÓN PERTINENTES.',
        fundamento: 'Artículo: 5, Fracción: VI, Parrafo: , Inciso: ',
        sancion: '5 unidades de cuenta',
        monto_infraccion: 358.4,
        pagada: true
    })
    .expectJSON('infracciones.?', {
        folio: '01124087441',
        fecha: '2012-12-19',
        situacion: 'Pagada ',
        motivo: 'POR ESTACIONARSE EN ZONAS O VÍAS PÚBLICAS  DONDE EXISTA SEÑALIZACIÓN VÍAL RESTRICTIVA',
        fundamento: 'Artículo: 12, Fracción: II, Parrafo: , Inciso: ',
        sancion: '10 unidades de cuenta',
        monto_infraccion: 716.8,
        pagada: true
    })
    .inspectJSON()
    .toss();

frisby.create('Obtener infracciones de un vehiculo sin infracciones')
    .get(URL_API + '/vehiculos/902TER/') // Debe ser /vehiculos/183YTP/infracciones
    .expectJSON({
        placas: '902TER',
        infracciones: []
    })
    .inspectJSON()
    .toss();

    frisby.create('Obtener adeudos de tenencias de un vehiculo con adeudos')
    .get(URL_API + '/vehiculos/183YTP/') // Debe ser /vehiculos/183YTP/adeudos-tenencias
    .expectJSON('adeudos_tenencias.?', {
        ejercicio: '2013',
        tenencia: 0,
        subsidio: 0,
        actualizacion: 0,
        recargo: 0,
        condonacion_recargo: 0,
        total_tenencia: 0,
        derecho: 205.5,
        actualiza_derecho: 19.39,
        recargo_derecho: 25.84,
        total_derechos: 250.73,
        total_impuesto: 0,
        total_derecho: 205.5,
        total_actualiza: 19.39,
        total_recargo: 25.84,
        total: 251
    })
    .expectJSON('adeudos_tenencias.?', {
        ejercicio: '2014',
        tenencia: 0,
        subsidio: 0,
        actualizacion: 0,
        recargo: 0,
        condonacion_recargo: 0,
        total_tenencia: 0,
        derecho: 217,
        actualiza_derecho: 11.89,
        recargo_derecho: 26.29,
        total_derechos: 255.18,
        total_impuesto: 0,
        total_derecho: 217,
        total_actualiza: 11.89,
        total_recargo: 26.29,
        total: 255
    })
    .expectJSON('adeudos_tenencias.?', {
        ejercicio: '2015',
        tenencia: 0,
        subsidio: 0,
        actualizacion: 0,
        recargo: 0,
        condonacion_recargo: 0,
        total_tenencia: 0,
        derecho: 227.5,
        actualiza_derecho: 5.16,
        recargo_derecho: 26.73,
        total_derechos: 259.39,
        total_impuesto: 0,
        total_derecho: 227.5,
        total_actualiza: 5.16,
        total_recargo: 26.73,
        total: 259
    })
    .inspectJSON()
    .toss();

frisby.create('Obtener adeudos de tenencias de un vehiculo sin adeudos')
    .get(URL_API + '/vehiculos/608YTP/adeudos-tenencias')
    .expectJSON({
        placas: '608YTP',
        adeudos_tenencias: []
    })
    .inspectJSON()
    .toss();

frisby.create('Error con placas no encontradas')
    .get(URL_API + '/vehiculos/666GOD')
    .expectJSON({
        error: 'Placas no encontradas'
    })
    .inspectJSON()
    .toss();
