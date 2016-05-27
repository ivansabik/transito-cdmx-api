API Tránsito CDMX
===========
[![Build Status](https://travis-ci.org/ivansabik/transito-cdmx-api.svg?branch=master)](https://travis-ci.org/ivansabik/transito-cdmx-api)

- Info de vehículo, adeudos de tenencia e infracciones por medio de número de placa
- Adeudos de tenencia por número de placa
- Tenencias por número de placa
- Verificentros
- Corralones

```
git clone https://github.com/ivansabik/transito-cdmx-api.git
cd transito-cdmx-api
npm install
npm start
```

En http://localhost:3000/api/v1/ estará corriendo una instancia de la API.

Alternativamente si quieres probarla con tu terminal:

`npm install -g transito-df`

Y después:

`transito-df -p 186USA`

## API

Endpoints:

- /api/v1/vehiculos/NUMERO_PLACA
- /api/v1/vehiculos/NUMERO_PLACA/infracciones
- /api/v1/vehiculos/NUMERO_PLACA/adeudos-tenencias
- /api/v1/verificentros
- /api/v1/corralones

## CLI

```
node cli.js -h

  Options:

    -p, --placas        Placas
    -t, --tenencias     Muestra sólo adeudos de tenencias
    -i, --infracciones  Muestra sólo infracciones
    -o, --output        Ruta para guardar en JSON
```

## /api/v1/vehiculos/183YTP

```javascript
{
    "adeudos_tenencias": [
        {
            "ejercicio": "2014",
            "tenencia": 0,
            "subsidio": 0,
            "actualizacion": 0,
            "recargo": 0,
            "condonacion_recargo": 0,
            "total_tenencia": 0,
            "derecho": 217,
            "actualiza_derecho": 12.6,
            "recargo_derecho": 25.39,
            "total_derechos": 254.99,
            "total_impuesto": 0,
            "total_derecho": 217,
            "total_actualiza": 12.6,
            "total_recargo": 25.39,
            "total": 255
        },
        {
            "ejercicio": "2013",
            "tenencia": 0,
            "subsidio": 0,
            "actualizacion": 0,
            "recargo": 0,
            "condonacion_recargo": 0,
            "total_tenencia": 0,
            "derecho": 205.5,
            "actualiza_derecho": 20.11,
            "recargo_derecho": 24.95,
            "total_derechos": 250.56,
            "total_impuesto": 0,
            "total_derecho": 205.5,
            "total_actualiza": 20.11,
            "total_recargo": 24.95,
            "total": 251
        },
        {
            "ejercicio": "2015",
            "tenencia": 0,
            "subsidio": 0,
            "actualizacion": 0,
            "recargo": 0,
            "condonacion_recargo": 0,
            "total_tenencia": 0,
            "derecho": 227.5,
            "actualiza_derecho": 5.91,
            "recargo_derecho": 25.81,
            "total_derechos": 259.22,
            "total_impuesto": 0,
            "total_derecho": 227.5,
            "total_actualiza": 5.91,
            "total_recargo": 25.81,
            "total": 259
        }
    ],
    "placa": "183YTP",
    "modelo": "2012",
    "num_cilindros": 4,
    "procedencia_nacional": true,
    "valor_factura": 615288,
    "fecha_factura": "2012-11-30",
    "depreciacion": 369172.8,
    "depreciacion_restante": 246115.2,
    "infracciones": [
        {
            "folio": "03038482657",
            "fecha": "2013-09-06",
            "situacion": "Pagada ",
            "motivo": "POR NO RESPETAR LOS LÍMITES DE VELOCIDAD ESTABLECIDOS EN VÍAS PRIMARIAS, EN CASO DE NO HABER SEÑALAMIENTO   LA VELOCIDAD MÁXIMA SERÁ DE 70 KILÓMETROS POR HORA",
            "fundamento": "Artículo: 5, Fracción: V, Parrafo: , Inciso: A",
            "sancion": "5 unidades de cuenta ",
            "monto_infraccion": 358.4,
            "pagada": true
        },
        {
            "folio": "04144419377",
            "fecha": "2014-07-11",
            "situacion": "Pagada ",
            "motivo": "POR NO AJUSTARSE EL CINTURÓN DE SEGURIDAD Y ASEGURARSE QUE LOS DEMÁS PASAJEROS TAMBIÉN SE LO AJUSTEN, CUANDO SE TRATE DE MENORES DE 12 AÑOS O PERSONAS CON DISCAPACIDAD, DEBERÁN SER TRANSPORTADOS UTILIZANDO LOS SISTEMAS DE RETENCIÓN PERTINENTES.",
            "fundamento": "Artículo: 5, Fracción: VI, Parrafo: , Inciso: ",
            "sancion": "5 unidades de cuenta ",
            "monto_infraccion": 358.4,
            "pagada": true
        }
    ],
    "monto_adeudo_tenencias": 765,
    "monto_adeudo_infracciones": 0,
    "monto_total_adeudos": 0
}
```

## /api/v1/vehiculos/183YTP/adeudos-tenencias

```javascript
{
    "placas": "134WEG",
    "adeudos_tenencias": [
        {
            "ejercicio": "2014",
            "tenencia": 293,
            "subsidio": 0,
            "actualizacion": 17.02,
            "recargo": 34.28,
            "condonacion_recargo": 0,
            "total_tenencia": 344.3,
            "derecho": 434,
            "actualiza_derecho": 25.21,
            "recargo_derecho": 50.78,
            "total_derechos": 509.99,
            "total_impuesto": 293,
            "total_derecho": 434,
            "total_actualiza": 42.23,
            "total_recargo": 85.06,
            "total": 854
        },
        {
            "ejercicio": "2010",
            "tenencia": 251,
            "subsidio": 0,
            "actualizacion": 56.07,
            "recargo": 33.96,
            "condonacion_recargo": 0,
            "total_tenencia": 341.03,
            "derecho": 291,
            "actualiza_derecho": 65,
            "recargo_derecho": 39.37,
            "total_derechos": 395.37,
            "total_impuesto": 251,
            "total_derecho": 291,
            "total_actualiza": 121.07,
            "total_recargo": 73.33,
            "total": 736
        },
        {
            "ejercicio": "2012",
            "tenencia": 271,
            "subsidio": 0,
            "actualizacion": 39.18,
            "recargo": 34.3,
            "condonacion_recargo": 0,
            "total_tenencia": 344.48,
            "derecho": 314,
            "actualiza_derecho": 45.4,
            "recargo_derecho": 39.74,
            "total_derechos": 399.14,
            "total_impuesto": 271,
            "total_derecho": 314,
            "total_actualiza": 84.58,
            "total_recargo": 74.04,
            "total": 744
        },
        {
            "ejercicio": "2013",
            "tenencia": 283,
            "subsidio": 0,
            "actualizacion": 27.7,
            "recargo": 34.36,
            "condonacion_recargo": 0,
            "total_tenencia": 345.06,
            "derecho": 411,
            "actualiza_derecho": 40.23,
            "recargo_derecho": 49.9,
            "total_derechos": 501.13,
            "total_impuesto": 283,
            "total_derecho": 411,
            "total_actualiza": 67.93,
            "total_recargo": 84.26,
            "total": 846
        },
        {
            "ejercicio": "2011",
            "tenencia": 262,
            "subsidio": 0,
            "actualizacion": 49.07,
            "recargo": 34.4,
            "condonacion_recargo": 0,
            "total_tenencia": 345.47,
            "derecho": 303,
            "actualiza_derecho": 56.75,
            "recargo_derecho": 39.78,
            "total_derechos": 399.53,
            "total_impuesto": 262,
            "total_derecho": 303,
            "total_actualiza": 105.82,
            "total_recargo": 74.18,
            "total": 745
        },
        {
            "ejercicio": "2015",
            "tenencia": 305.1,
            "subsidio": 0,
            "actualizacion": 7.92,
            "recargo": 34.62,
            "condonacion_recargo": 0,
            "total_tenencia": 347.64,
            "derecho": 455,
            "actualiza_derecho": 11.83,
            "recargo_derecho": 51.63,
            "total_derechos": 518.46,
            "total_impuesto": 305.1,
            "total_derecho": 455,
            "total_actualiza": 19.75,
            "total_recargo": 86.25,
            "total": 866
        }
    ]
}
```

## /api/v1/vehiculos/912TER/infracciones

```javascript
{
    "placas": "183YTP",
    "infracciones": [
        {
            "folio": "03038482657",
            "fecha": "2013-09-06",
            "situacion": "Pagada ",
            "motivo": "POR NO RESPETAR LOS LÍMITES DE VELOCIDAD ESTABLECIDOS EN VÍAS PRIMARIAS, EN CASO DE NO HABER SEÑALAMIENTO   LA VELOCIDAD MÁXIMA SERÁ DE 70 KILÓMETROS POR HORA",
            "fundamento": "Artículo: 5, Fracción: V, Parrafo: , Inciso: A",
            "sancion": "5 unidades de cuenta ",
            "monto_infraccion": 358.4,
            "pagada": true
        },
        {
            "folio": "04144419377",
            "fecha": "2014-07-11",
            "situacion": "Pagada ",
            "motivo": "POR NO AJUSTARSE EL CINTURÓN DE SEGURIDAD Y ASEGURARSE QUE LOS DEMÁS PASAJEROS TAMBIÉN SE LO AJUSTEN, CUANDO SE TRATE DE MENORES DE 12 AÑOS O PERSONAS CON DISCAPACIDAD, DEBERÁN SER TRANSPORTADOS UTILIZANDO LOS SISTEMAS DE RETENCIÓN PERTINENTES.",
            "fundamento": "Artículo: 5, Fracción: VI, Parrafo: , Inciso: ",
            "sancion": "5 unidades de cuenta ",
            "monto_infraccion": 358.4,
            "pagada": true
        }
    ]
}
```

## /api/v1/verificentros

```javascript
{
	"verificentros": [
		{
			"numero": "9001",
			"razon_social": "CONTROL AMBIENTAL IXTAPALAPA, S.A. DE C.V.",
			"direccion": "PEDRO ACEVES # 70 ESQ. CAYETANO ANDRADE, COL. STA. MARTHA ACATITLA",
			"delegacion": "IZTAPALAPA",
			"telefonos": "57335157 57347163",
			"latitud": "19.3672",
			"lon": "-99.0182",
			"id": 0
		},
		{
			"numero": "9002",
			"razon_social": "CONTROL ATMOSFERICO DE MEXICO, S.A. DE C.V.",
			"direccion": "RODOLFO GAONA # 86, COL. LOMAS DE SOTELO",
			"delegacion": "MIGUEL HIDALGO",
			"telefonos": "52803460",
			"latitud": "19.4522",
			"lon": "-99.218",
			"id": 1
		},
		...
	]
}
```

## /api/v1/corralones

```javascript
{
  "corralones": [
    {
      "nombre": "Cien Metros",
      "calle": "Eje Central L\u00e1zaro C\u00e1rdenas",
      "colonia": "Nueva Industrial Vallejo",
      "delegacion": "Gustavo A. Madero",
      "cp": "07700",
      "calle_entre_1": "Cda. de 100 Metros",
      "calle_entre_2": "Puente Fortuna",
      "direccion": "Eje Central L\u00e1zaro C\u00e1rdenas(camell\u00f3n central) No. S\/N , Col. Nueva Industrial Vallejo",
      "latitud": 19.48379,
      "longitud": -99.14289,
      "telefono": 57194368,
      "estado": "activo"
    },
    {
      "nombre": "El Zarco",
      "calle": "Av. Talism\u00e1n",
      "colonia": "San Juan de Arag\u00f3n",
      "delegacion": "Gustavo A. Madero",
      "cp": "07900",
      "esquina": "Gran Canal",
      "direccion": "Av. Talism\u00e1n s\/n esquina Gran Canal, Col. San Juan de Arag\u00f3n",
      "latitud": -99.095006,
      "longitud": 19.466936,
      "telefono": 57417855,
      "estado": "activo"
    }
  ]
}
```
