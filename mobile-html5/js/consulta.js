$(document).ready(function(){
    var updatePage = function( resp ) {
        // Info general vehiculo
        vehiculo = resp['vehiculo'];
        $('#modelo').html(vehiculo['modelo']);
        $('#numero_cilindros').html(vehiculo['']);
        $('#procedencia').html(vehiculo['procedencia']);
        $('#valor_factura').html(vehiculo['valor_factura']);
        $('#clave_vehicular').html(vehiculo['clave_vehicular']);
        $('#fecha_factura').html(vehiculo['fecha_factura']);
        $('#rfc').html(vehiculo['rfc']);
        $('#depreciacion').html(vehiculo['depreciacion']);
        $('#info-consulta').css('visibility','visible');
        $("#cargando").hide();
        // Adeudos
        var infracciones = vehiculo['infracciones']
        if(infracciones.length > 0) {
        }
        // Tenencias
        var adeudos_tenencia = vehiculo['adeudos_tenencia']
        if(adeudos_tenencia.length > 0) {
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
