<?php

class ViewNewPoll extends ModelData {
    function viewNewPoll() {
        $result = $this->getNewPoll();
        echo json_encode($result);
    }
}