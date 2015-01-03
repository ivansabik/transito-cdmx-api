<?php
error_reporting(0);
header('Content-Type: application/json; charset=utf-8');

use Camspiers\JsonPretty\JsonPretty;

# Lee args de GET

if(!isset($_GET['placas'])) {
    $error = array('mensaje_error' => 'Falta el parametro "placas"', 'error' => 1);
    die(json_encode($error));
}
$placas = $_GET['placas'];
if(count($placas) != 6) {
    $error = array('mensaje_error' => 'Las placas son de 3 numeros y 3 letras', 'error' => 2);
    die(json_encode($error));
}
require_once('scrape_transito.php');
$jsonPretty = new JsonPretty();
echo $jsonPretty->prettify(json_encode($infoAuto));
