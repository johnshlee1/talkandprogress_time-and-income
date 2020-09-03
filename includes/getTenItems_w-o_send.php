<?php
        include_once 'connect.php';

        //Created a template
        $sql = "SELECT * FROM collection ORDER BY id DESC LIMIT 10;";
        $result = mysqli_query($conn, $sql);
        
        // storing in array
        $data = array();
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
        } else {
                echo "There is no more!";
        };

        // returning response in JSON format
        echo json_encode($data);
        ?>