<?php
    include_once 'connect.php';

    $answer = mysqli_real_escape_string($conn, $_POST['answer']);
    //$country = mysqli_real_escape_string($conn, $_POST['country']);

    $sql = "INSERT INTO collection (answer) VALUES (?);";

    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "SQL error";
    } else {
        mysqli_stmt_bind_param($stmt, 's', $answer);
        mysqli_stmt_execute($stmt);
        
        if (mysqli_query($conn, $sql)){
            echo "was successfully recorded!";
        } else {
            echo "somehow didn't make it... and don't know why";
        }
        mysqli_close($conn);
    }; 
    ?>