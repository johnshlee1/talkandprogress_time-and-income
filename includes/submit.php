<?php
    include_once 'connect.php';

    $answer = mysqli_real_escape_string($conn, $_POST['answer']);

    $sql = "INSERT INTO collection (answer) VALUES (?);";

    $stmt = mysqli_stmt_init($conn);
    if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "SQL error";
    } else {
        if (strlen($answer) >= 1 && empty(trim($answer))) {
            echo '<script type="text/javascript">',
            'alert("Please share your desires!");',
            '</script>';

        } else {
        mysqli_stmt_bind_param($stmt, "s", $answer);
        mysqli_stmt_execute($stmt);
            header("Location: ../index.php");
            echo '<script type="text/javascript">',
            'form.reset();',
            'talkModal.style.display = "none";',
            '</script>';
            
          
        }
    }

