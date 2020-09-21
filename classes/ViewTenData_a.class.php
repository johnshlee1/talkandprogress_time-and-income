<?php

class ViewTenData_a extends ModelData {
    function viewTenData_a() {
        $result = $this->getTenData_a();
        echo json_encode($result);
    }
}