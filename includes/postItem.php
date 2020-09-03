<?php
    include_once 'connect.php';
        
    if(!$conn) {
        die("Could Not Connect:".mysqli_connect_error());
    } else {
        $test_answer = test_input($_POST['answer']);
        //$test_country = test_input($_POST['country']);
        $answer = mysqli_real_escape_string($conn, $test_answer);
        //$country = mysqli_real_escape_string($conn, $test_country);

        $sql = "INSERT INTO collection(answer) VALUES('$answer')";
        $result = mysqli_query($conn, $sql);
        if (mysqli_query($conn, $sql)){
            echo "was successfully recorded!";
        } else {
            echo "somehow didn't make it...";
        }
        mysqli_close($conn);
    };

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    };
    ?>