$(document).ready(function(){
    var updatePage = function( resp ) {
        // Info general vehiculo
        vehiculo = resp['vehiculo'];
        $('#modelo').html(vehiculo['modelo']);
        $('#numero_cilindros').html(vehiculo['']);
        if(vehiculo['procedencia_nacional'] == true) {
            $('#procedencia').html('Nacional');
        } else {
            $('#procedencia').html('Extranjera');
        }
        $('#valor_factura').html(vehiculo['valor_factura']);
        $('#clave_vehicular').html(vehiculo['clave_vehicular']);
        $('#fecha_factura').html(vehiculo['fecha_factura']);
        $('#rfc').html(vehiculo['rfc']);
        $('#depreciacion').html(vehiculo['depreciacion']);
        $('#total_adeudos').html(vehiculo['total_adeudos']);

        $('#info-consulta').css('visibility','visible');
        $("#cargando").hide();
        // Tenencias
        var adeudos_tenencia = vehiculo['adeudos_tenencia']
        if(adeudos_tenencia.length > 0) {
            for (i = 0; i < adeudos_tenencia.length; i++) {
                var adeudo = adeudos_tenencia[i];
                var divAdeudo = '<div class="bg-info info-auto"> \
                <span class="titulo">Año: </span> \
                <span>'+adeudo['anio']+'</span></br> \
                <span class="titulo">Impuesto: $</span> \
                <span>'+adeudo['total_impuesto']+'</span></br> \
                <span class="titulo">Derechos: $</span> \
                <span>'+adeudo['total_derecho']+'</span></br> \
                <span class="titulo">Actualización: $</span> \
                <span>'+adeudo['total_actualizacion']+'</span></br> \
                <span class="titulo">Recargos: $</span> \
                <span>'+adeudo['total_recargo']+'</span></br> \
                <span class="titulo">Total: $</span> \
                <span>'+adeudo['total_tenencia']+'</span></br> \
                </div></br>';
                $('#adeudos-tenencia').append(divAdeudo);
            }
        }
        // Infracciones
        var infraciones = vehiculo['infracciones']
        if(infraciones.length > 0) {
            for (i = 0; i < infraciones.length; i++) {
                var infraccion = infraciones[i];
                var textoPagada = 'No';
                if(infraccion['pagada'] == true) {
                    textoPagada = 'Sí';
                }
                var divInfraccion = '<div class="bg-info info-auto"> \
                <span class="titulo">Folio: </span><span>'+infraccion['folio']+'</span></br> \
				<span class="titulo">Fecha: </span><span>'+infraccion['fecha']+'</span></br> \
				<span class="titulo">Pagada: </span><span>'+textoPagada+'</span></br> \
				<span class="titulo">Motivo: </span><span>'+infraccion['motivo']+'</span></br> \
                <span class="titulo">Multa en días de salario: </span><span>'+infraccion['sancion']['dias_sm']+'</span></br> \
				<span class="titulo">Multa estimada: $</span><span>'+infraccion['sancion']['monto']+'</span></br> \
                </div></br>';
                $('#infracciones').append(divInfraccion);
            }
        }
        console.log(resp);
    };
    var printError = function( req, status, err ) {
        console.log( 'Err0r!', status, err );
    };
    var ajaxOptions = {
        url: '/transitodf/vehiculos/912TER',
        dataType: 'json',
        success: updatePage,
        error: printError
    };
    $.ajax(ajaxOptions);
});
