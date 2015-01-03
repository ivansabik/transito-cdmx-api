<?php
class TransitoDf {
    public function info($placas = null) {
        if (!$placas) {
            return array('mensaje_error' => 'Faltan las placas', 'error' => 1);
        }
    }
}
