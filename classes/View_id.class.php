<?php
class View_id extends ModelData {
    function view_id() {
        $result = $this->get_id();
        echo $result;
    }
}