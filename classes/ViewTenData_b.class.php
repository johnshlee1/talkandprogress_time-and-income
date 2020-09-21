<?php

class ViewTenData_b extends ModelData {
    function viewTenData_b() {
        $result = $this->getTenData_b();
        echo json_encode($result);
    }
}