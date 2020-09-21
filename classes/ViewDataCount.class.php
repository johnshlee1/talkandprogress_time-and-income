<?php

class ViewDataCount extends ModelData {
    function viewDataCount() {
        $result = $this->getDataCount();
        echo $result;
    }
}