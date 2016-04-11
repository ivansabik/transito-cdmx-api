# Fuentes
## Adeudos totales

```curl
http://www.finanzas.df.gob.mx/consultas_pagos/consulta_adeudosten.php?wlplaca=912TER&consulta=Consulta+de+adeudos
```

Si no hay adedudos

```
<span class="valido"> Sin adeudos! </span>
tbody > tr > td > span
```

Si hay adeudos se encuentran en un renglón (td) por año/ejercicio:

```
<td>2011</td>
tbody > tr:nth-child(2) > td
```

## Adeudo de un año específico

```
curl 'http://www.finanzas.df.gob.mx/formato_lc/lc_new/tenencia/calculo/validaPlaca' --data 'placa=902TER&ejercicio=2016'
```

Info relacionada con el vehículo

```javascript
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
```

Info relacionada con el adeudo de tenencia

```javascript
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
```

## Infracciones

```
curl http://www.finanzas.df.gob.mx/sma/detallePlaca.php?placa=608yyv
```

```
<span class="valido"> Sin adeudos! </span>
#tablaDatos > tbody > tr > td > span
```

```
Folio: tbody > tr:nth-child(1) > td:nth-child(1)
Fecha de Infracción: tbody > tr:nth-child(1) > td:nth-child(2)
Situación: tbody > tr:nth-child(1) > td:nth-child(3) > span
Motivo:	tbody > tr:nth-child(2) > td:nth-child(2)
Fundamento:	tbody > tr:nth-child(3) > td:nth-child(2)
Sanción:	tbody > tr:nth-child(4) > td:nth-child(2)
```
