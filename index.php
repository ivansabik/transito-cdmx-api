<?php
error_reporting(0);
header('Content-Type: application/json; charset=utf-8');
require 'vendor/autoload.php';

use Luracast\Restler\Restler;

$rest = new Restler();
$rest->addAPIClass('TransitoDf');
$rest->handle();

class TransitoDf {
    /**
     * @url GET vehiculos/{placas}
     */
    function vehiculos($placas = null) {
        if (!$placas) {
            return array('error' => 'Falta el parametro "placa"', 'error' => 1);
        }
        $placas = strtoupper($placas);
        if(strlen($placas) != 6) {
            return array('mensaje_error' => 'Las placas son de 3 numeros y 3 letras', 'error' => 2);
        }
        require_once('consulta_placas.php');
        return $consulta;
    }

    function verificentros($lat = null, $lon = null, $radio = null) {
		die(file_get_contents ('verificentros.json'));
    }
    
    function corralones($lat = null, $lon = null, $radio = null) {
		die(file_get_contents ('corralones.json'));
    }
}
?>
