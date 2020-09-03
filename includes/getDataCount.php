<?php
    include_once 'connect.php';

    $sqlCount = "SELECT count(id) AS total FROM collection";
    $resultCount = mysqli_query($conn, $sqlCount);

    $values = mysqli_fetch_assoc($resultCount);
    $num_rows = $values['total'];
    echo $num_rows;
    ?>