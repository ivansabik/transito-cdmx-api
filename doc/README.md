# Adeudos totales
http://www.finanzas.df.gob.mx/consultas_pagos/consulta_adeudosten.php?wlplaca=912TER&consulta=Consulta+de+adeudos

<span class="valido"> Sin adeudos! </span>
tbody > tr > td > span

<td>2011</td>
tbody > tr:nth-child(2) > td

# Adeudo de un año específico
curl 'http://www.finanzas.df.gob.mx/formato_lc/lc_new/tenencia/calculo/validaPlaca' --data 'placa=902TER&ejercicio=2016'

Vehiculo
{
  "placa":"902TER",
  "modelo":"2004",
  "num_cilindros":"4",
  "procedencia":"N",
  "valor_fact":"139995",
  "cve_vehi":"0052008",
  "fech_factura":"2004-01-24",
  "rfc":"Persona Fisica",
  "depresiacion":"10499.625",
}

Tenencia
{
   "ejercicio":"2016",
   "tenencia":"454.81",
   "subsidio":"0",
   "actualiza_ten":"0.63",
   "recargo_ten":"3.18",
   "condonacion_recargo_ten":null,
   "total_tenencia":458.62,
   "derecho":"477",
   "actuliza_derecho":"0.66",
   "recargo_derecho":"3.34",
   "total_derechos":"481",
   "total_impuesto":"454.81",
   "total_derecho":"477",
   "total_actualiza":1.29,
   "total_recargo":6.52,
   "total":"940",
}

# Infracciones

http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=608yyv


Folio: #tablaDatos > tbody > tr:nth-child(1) > td:nth-child(1)
Fecha de Infracción: #tablaDatos > tbody > tr:nth-child(1) > td:nth-child(2)
Situación: #tablaDatos > tbody > tr:nth-child(1) > td:nth-child(3) > span
Motivo:	#tablaDatos > tbody > tr:nth-child(2) > td:nth-child(2)
Fundamento:	#tablaDatos > tbody > tr:nth-child(3) > td:nth-child(2)
Sanción:	#tablaDatos > tbody > tr:nth-child(4) > td:nth-child(2)
