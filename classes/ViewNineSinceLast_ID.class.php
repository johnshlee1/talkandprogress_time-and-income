<?php

class ViewNineSinceLast_ID extends ModelData {
    function viewNineSinceLast_ID() {
        $result = $this->getNineSinceLast_ID();
        echo json_encode($result);
    }
}