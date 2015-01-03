API Tránsito DF
===========

API REST no oficial de Tránsito DF, proporciona diversa info relacionada con unas placas como son adeudos de tenencia e infracciones. Puedes probarla en http://mexicapis.org.mx/transito-df/?placas=NUMERO_DE_PLACAS

## API

1. Instalamos dependencias con ```composer install```
2. Corremos un server de pruebas en la carpeta del proyecto ```php -S localhost:5000```
3. Probamos con un Carrot que manejó Mancera: ```http://localhost:5000/?placas=183YTP``

![Carrot Mancera](http://438424cd093f86f0c7e0-2cd4f1b3b970cf6c05d6a60490c230b4.r88.cf2.rackcdn.com/mancera300613_g.jpg)

```
{
	"placas": "912TER",
	"modelo": "2004",
	"num_cilindros": "4",
	"procedencia": "N",
	"valor_factura": "145000",
	"clave_vehicular": "0320502",
	"fecha_factura": "2004-02-06",
	"rfc": "Persona Fisica",
	"valor_depreciacion": "10875",
	"infracciones": [
		{
			"folio": "03038125318",
			"fecha": "2013-08-02",
			"pagada": false,
			"motivo": "POR NO RESPETAR LOS L\u00cdMITES DE VELOCIDAD ESTABLECIDOS EN V\u00cdAS PRIMARIAS, EN CASO DE NO HABER SE\u00d1ALAMIENTO   LA VELOCIDAD M\u00c1XIMA SER\u00c1 DE 70 KIL\u00d3METROS POR HORA",
			"fundamento": {
				"articulo": " 5",
				"fraccion": " V",
				"parrafo": " ",
				"inciso": " A"
			},
			"sancion": {
				"dias_sm": 5,
				"monto": 336.45
			}
		},
		{
			"folio": "03014010881",
			"fecha": "2010-03-10",
			"pagada": false,
			"motivo": "POR NO RESPETAR LOS L\u00cdMITES DE VELOCIDAD ESTABLECIDOS EN V\u00cdAS PRIMARIAS, EN CASO DE NO HABER SE\u00d1ALAMIENTO   LA VELOCIDAD M\u00c1XIMA SER\u00c1 DE 70 KIL\u00d3METROS POR HORA",
			"fundamento": {
				"articulo": " 5",
				"fraccion": " V",
				"parrafo": " ",
				"inciso": " A"
			},
			"sancion": {
				"dias_sm": 5,
				"monto": 336.45
			}
		},
		{
			"folio": "03013139729",
			"fecha": "2009-12-22",
			"pagada": false,
			"motivo": "POR NO RESPETAR LOS L\u00cdMITES DE VELOCIDAD ESTABLECIDOS EN V\u00cdAS PRIMARIAS, EN CASO DE NO HABER SE\u00d1ALAMIENTO LA VELOCIDAD M\u00c1XIMA SER\u00c1 DE 70 KIL\u00d3METROS POR HORA",
			"fundamento": {
				"articulo": " 5",
				"fraccion": " V",
				"parrafo": " ",
				"inciso": " A"
			},
			"sancion": {
				"dias_sm": 5,
				"monto": 336.45
			}
		}
	],
	"adeudos_tenencia": [
		{
			"anio": "2011",
			"tenencia": "1070.08",
			"subsidio": "0",
			"actualizacion_tenencia": "158.26",
			"recargo_tenencia": "638.49",
			"condonacion_recargo_tenencia": null,
			"total_tenencia": 1866.83,
			"derecho": "303",
			"actulizacion_derecho": "44.81",
			"recargo_derecho": "33.66",
			"total_derechos": "381.47",
			"total_impuesto": "1070.08",
			"total_derecho": "303",
			"total_actualizacion": 203.07,
			"total_recargo": "33.66",
			"total": "2248",
			"linea_captura": "84104XX912TERH1M5MR9",
			"vigencia": "2015-01-10",
			"dagid": "1137204",
			"lineacapturaCB": "84104XX912TERH1M5MR9000002248813"
		},
		{
			"anio": "2012",
			"tenencia": "752.54",
			"subsidio": "0",
			"actualizacion_tenencia": "78.71",
			"recargo_tenencia": "0",
			"condonacion_recargo_tenencia": "0",
			"total_tenencia": 831.25,
			"derecho": "314",
			"actulizacion_derecho": "32.84",
			"recargo_derecho": "0",
			"total_derechos": "346.84",
			"total_impuesto": "752.54",
			"total_derecho": "314",
			"total_actualizacion": 111.55,
			"total_recargo": "0",
			"total": "1178",
			"linea_captura": "85104XX912TERH1K0YT5",
			"vigencia": "2015-01-10",
			"dagid": "1137205",
			"lineacapturaCB": "85104XX912TERH1K0YT5000001178690"
		},
		{
			"anio": "2013",
			"tenencia": "404.99",
			"subsidio": "0",
			"actualizacion_tenencia": "24.09",
			"recargo_tenencia": "41.53",
			"condonacion_recargo_tenencia": "41.53",
			"total_tenencia": 429.08,
			"derecho": "411",
			"actulizacion_derecho": "24.45",
			"recargo_derecho": "42.15",
			"total_derechos": "477.6",
			"total_impuesto": "404.99",
			"total_derecho": "411",
			"total_actualizacion": 48.54,
			"total_recargo": "42.15",
			"total": "907",
			"linea_captura": "85104XX912TERH1JQXTK",
			"vigencia": "2015-01-10",
			"dagid": "1137212",
			"lineacapturaCB": "85104XX912TERH1JQXTK000000907875"
		},
		{
			"anio": "2014",
			"tenencia": "419.83",
			"subsidio": "0",
			"actualizacion_tenencia": "8.85",
			"recargo_tenencia": "34.63",
			"condonacion_recargo_tenencia": "34.63",
			"total_tenencia": 428.68,
			"derecho": "434",
			"actulizacion_derecho": "9.15",
			"recargo_derecho": "35.80",
			"total_derechos": "478.95",
			"total_impuesto": "419.83",
			"total_derecho": "434",
			"total_actualizacion": 18,
			"total_recargo": "35.80",
			"total": "908",
			"linea_captura": "85104XX912TERH1JRYU1",
			"vigencia": "2015-01-10",
			"dagid": "1137214",
			"lineacapturaCB": "85104XX912TERH1JRYU1000000908665"
		}
	]
}
```

## Línea de comandos

1. Instalamos dependencias con ```composer install```
2. Probamos con un Carrot que manejó Mancera: ```php transito-df 183YTP```

```
array(11) {
  ["placas"]=>
  string(6) "183YTP"
  ["modelo"]=>
  string(4) "2012"
  ["num_cilindros"]=>
  string(1) "4"
  ["procedencia"]=>
  string(1) "N"
  ["valor_factura"]=>
  string(6) "615288"
  ["clave_vehicular"]=>
  string(7) "0044801"
  ["fecha_factura"]=>
  string(10) "2012-11-30"
  ["rfc"]=>
  string(13) "Persona Moral"
  ["valor_depreciacion"]=>
  string(8) "446083.8"
  ["infracciones"]=>
  array(3) {
    [0]=>
    array(6) {
      ["folio"]=>
      string(11) "04144419377"
      ["fecha"]=>
      string(10) "2014-07-11"
      ["pagada"]=>
      bool(true)
      ["motivo"]=>
      string(250) "POR NO AJUSTARSE EL CINTURÓN DE SEGURIDAD Y ASEGURARSE QUE LOS DEMÁS PASAJEROS TAMBIÉN SE LO AJUSTEN, CUANDO SE TRATE DE MENORES DE 12 AÑOS O PERSONAS CON DISCAPACIDAD, DEBERÁN SER TRANSPORTADOS UTILIZANDO LOS SISTEMAS DE RETENCIÓN PERTINENTES."
      ["fundamento"]=>
      array(4) {
        ["articulo"]=>
        string(2) " 5"
        ["fraccion"]=>
        string(3) " VI"
        ["parrafo"]=>
        string(1) " "
        ["inciso"]=>
        string(1) " "
      }
      ["sancion"]=>
      array(2) {
        ["dias_sm"]=>
        int(5)
        ["monto"]=>
        float(336.45)
      }
    }
    [1]=>
    array(6) {
      ["folio"]=>
      string(11) "03038482657"
      ["fecha"]=>
      string(10) "2013-09-06"
      ["pagada"]=>
      bool(false)
      ["motivo"]=>
      string(164) "POR NO RESPETAR LOS LÍMITES DE VELOCIDAD ESTABLECIDOS EN VÍAS PRIMARIAS, EN CASO DE NO HABER SEÑALAMIENTO   LA VELOCIDAD MÁXIMA SERÁ DE 70 KILÓMETROS POR HORA"
      ["fundamento"]=>
      array(4) {
        ["articulo"]=>
        string(2) " 5"
        ["fraccion"]=>
        string(2) " V"
        ["parrafo"]=>
        string(1) " "
        ["inciso"]=>
        string(2) " A"
      }
      ["sancion"]=>
      array(2) {
        ["dias_sm"]=>
        int(5)
        ["monto"]=>
        float(336.45)
      }
    }
    [2]=>
    array(6) {
      ["folio"]=>
      string(11) "01124087441"
      ["fecha"]=>
      string(10) "2012-12-19"
      ["pagada"]=>
      bool(true)
      ["motivo"]=>
      string(90) "POR ESTACIONARSE EN ZONAS O VÍAS PÚBLICAS  DONDE EXISTA SEÑALIZACIÓN VÍAL RESTRICTIVA"
      ["fundamento"]=>
      array(4) {
        ["articulo"]=>
        string(3) " 12"
        ["fraccion"]=>
        string(3) " II"
        ["parrafo"]=>
        string(1) " "
        ["inciso"]=>
        string(1) " "
      }
      ["sancion"]=>
      array(2) {
        ["dias_sm"]=>
        int(10)
        ["monto"]=>
        float(672.9)
      }
    }
  }
  ["adeudos_tenencia"]=>
  array(2) {
    [0]=>
    array(20) {
      ["anio"]=>
      string(4) "2013"
      ["tenencia"]=>
      string(8) "13977.37"
      ["subsidio"]=>
      string(1) "0"
      ["actualizacion_tenencia"]=>
      string(6) "831.65"
      ["recargo_tenencia"]=>
      string(7) "1433.51"
      ["condonacion_recargo_tenencia"]=>
      string(7) "1433.51"
      ["total_tenencia"]=>
      float(14809.02)
      ["derecho"]=>
      string(3) "411"
      ["actulizacion_derecho"]=>
      string(5) "24.45"
      ["recargo_derecho"]=>
      string(5) "42.15"
      ["total_derechos"]=>
      string(5) "477.6"
      ["total_impuesto"]=>
      string(8) "13977.37"
      ["total_derecho"]=>
      string(3) "411"
      ["total_actualizacion"]=>
      float(856.1)
      ["total_recargo"]=>
      string(5) "42.15"
      ["total"]=>
      string(5) "15287"
      ["linea_captura"]=>
      string(20) "85112XX183YTPH23Q866"
      ["vigencia"]=>
      string(10) "2015-01-10"
      ["dagid"]=>
      string(7) "1131292"
      ["lineacapturaCB"]=>
      string(32) "85112XX183YTPH23Q866000015287559"
    }
    [1]=>
    array(20) {
      ["anio"]=>
      string(4) "2014"
      ["tenencia"]=>
      string(8) "12352.27"
      ["subsidio"]=>
      string(1) "0"
      ["actualizacion_tenencia"]=>
      string(6) "260.63"
      ["recargo_tenencia"]=>
      string(7) "1019.12"
      ["condonacion_recargo_tenencia"]=>
      string(7) "1019.12"
      ["total_tenencia"]=>
      float(12612.9)
      ["derecho"]=>
      string(3) "434"
      ["actulizacion_derecho"]=>
      string(4) "9.15"
      ["recargo_derecho"]=>
      string(5) "35.80"
      ["total_derechos"]=>
      string(6) "478.95"
      ["total_impuesto"]=>
      string(8) "12352.27"
      ["total_derecho"]=>
      string(3) "434"
      ["total_actualizacion"]=>
      float(269.78)
      ["total_recargo"]=>
      string(5) "35.80"
      ["total"]=>
      string(5) "13092"
      ["linea_captura"]=>
      string(20) "85112XX183YTPH21A36M"
      ["vigencia"]=>
      string(10) "2015-01-10"
      ["dagid"]=>
      string(7) "1131300"
      ["lineacapturaCB"]=>
      string(32) "85112XX183YTPH21A36M000013092816"
    }
  }
}
```
