<?php
error_reporting(0);
header('Content-Type: application/json; charset=utf-8');

use Camspiers\JsonPretty\JsonPretty;

# Lee args de GET
$placas = $_GET['placas']; # Convertir a uppercase, validar placa!
require_once('scrape_transito.php');
$jsonPretty = new JsonPretty();
echo $jsonPretty->prettify(json_encode($infoAuto));
