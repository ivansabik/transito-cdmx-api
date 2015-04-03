exports.verificentros = [];
exports.corralones = [];
exports.scrapeInfracciones = [
  {
    folio: '03038482657',
    fecha: '2013-09-06',
    situacion: 'Pagada',
    motivo: 'POR NO RESPETAR LOS LÍMITES DE VELOCIDAD ESTABLECIDOS EN VÍAS PRIMARIAS, EN CASO DE NO HABER SEÑALAMIENTO   LA VELOCIDAD MÁXIMA SERÁ DE 70 KILÓMETROS POR HORA',
    fundamento: 'Artículo: 5, Fracción: V, Parrafo: , Inciso: A',
    sancion: '5 días de salario mínimo'
  },
  {
    folio: '04144419377',
    fecha: '2014-07-11',
    situacion: 'Pagada',
    motivo: 'POR NO AJUSTARSE EL CINTURÓN DE SEGURIDAD Y ASEGURARSE QUE LOS DEMÁS PASAJEROS TAMBIÉN SE LO AJUSTEN, CUANDO SE TRATE DE MENORES DE 12 AÑOS O PERSONAS CON DISCAPACIDAD, DEBERÁN SER TRANSPORTADOS UTILIZANDO LOS SISTEMAS DE RETENCIÓN PERTINENTES.',
    fundamento: 'Artículo: 5, Fracción: VI, Parrafo: , Inciso:',
    sancion: '5 días de salario mínimo'
  },
  {
    folio: '01124087441',
    fecha: '2012-12-19',
    situacion: 'Pagada',
    motivo: 'POR ESTACIONARSE EN ZONAS O VÍAS PÚBLICAS  DONDE EXISTA SEÑALIZACIÓN VÍAL RESTRICTIVA',
    fundamento: 'Artículo: 12, Fracción: II, Parrafo: , Inciso:',
    sancion: '10 días de salario mínimo'
  }
];
exports.vehiculo = {
    vehiculo: {
        placas: '183YTP',
        modelo: 2012,
        num_cilindros: 4,
        procedencia_nacional: true,
        valor_factura: 615288,
        clave_vehicular: '0044801',
        fecha_factura: '2012-11-30',
        rfc: 'Persona Moral',
        depreciacion: 446083.8,
        monto_adeudos: 29863.8,
        monto_infracciones: 'DEFINIR!',
        mondo_adeudos_infracciones: 'DEFINIR!',
        monto_adeudos_tenencias: 'DEFINIR!',
        infracciones: [
            {
                folio: '04144419377',
                fecha: '2014-07-11',
                pagada: true,
                motivo: 'POR NO AJUSTARSE EL CINTURÓN DE SEGURIDAD Y ASEGURARSE QUE LOS DEMÁS PASAJEROS TAMBIÉN SE LO AJUSTEN, CUANDO SE TRATE DE MENORES DE 12 AÑOS O PERSONAS CON DISCAPACIDAD, DEBERÁN SER TRANSPORTADOS UTILIZANDO LOS SISTEMAS DE RETENCIÓN PERTINENTES.',
                fundamento: {
                    articulo: ' 5',
                    fraccion: ' VI'
                },
                sancion: {
                    dias_sm: 5,
                    monto: 336.45
                }
            },
            {
                folio: '03038482657',
                fecha: '2013-09-06',
                pagada: false,
                motivo: 'POR NO RESPETAR LOS LÍMITES DE VELOCIDAD ESTABLECIDOS EN VÍAS PRIMARIAS, EN CASO DE NO HABER SEÑALAMIENTO   LA VELOCIDAD MÁXIMA SERÁ DE 70 KILÓMETROS POR HORA',
                fundamento: {
                    articulo: ' 5',
                    fraccion: ' V'
                },
                sancion: {
                    dias_sm: 5,
                    monto: 336.45
                }
            },
            {
                folio: '01124087441',
                fecha: '2012-12-19',
                pagada: true,
                motivo: 'POR ESTACIONARSE EN ZONAS O VÍAS PÚBLICAS  DONDE EXISTA SEÑALIZACIÓN VÍAL RESTRICTIVA',
                fundamento: {
                    articulo: ' 12',
                    fraccion: ' II'
                },
                sancion: {
                    dias_sm: 10,
                    monto: 672.9
                }
            }
        ],
        adeudos_tenencia: [
            {
                anio: 2013,
                tenencia: 13977.37,
                subsidio: 0,
                actualizacion_tenencia: 904.33,
                recargo_tenencia: 1440.54,
                condonacion_recargo_tenencia: 1440.54,
                total_tenencia: 14881.7,
                derecho: 411,
                actualizacion_derecho: 26.59,
                recargo_derecho: 42.35,
                total_derechos: 479.94,
                total_impuesto: 13977.37,
                total_derecho: 411,
                total_actualizacion: 930.92,
                total_recargo: 42.35,
                total: 15362
            },
            {
                anio: 2014,
                tenencia: 12352.27,
                subsidio: 0,
                actualizacion_tenencia: 322.39,
                recargo_tenencia: 1024.11,
                condonacion_recargo_tenencia: 1024.11,
                total_tenencia: 12674.66,
                derecho: 434,
                actualizacion_derecho: 11.32,
                recargo_derecho: 35.98,
                total_derechos: 481.3,
                total_impuesto: 12352.27,
                total_derecho: 434,
                total_actualizacion: 333.71,
                total_recargo: 35.98,
                total: 13156
            }
        ]
    }
};
