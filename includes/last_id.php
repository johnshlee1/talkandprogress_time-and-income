<?php
        include_once 'connect.php';

        $last_id = $_POST[ 'last_id' ];

        //Created a template
        $sql = "SELECT * FROM collection WHERE id < $last_id ORDER BY id DESC  LIMIT 9;";
        $result = mysqli_query($conn, $sql);
        
        // storing in array
        $data = array();
        while ($row = mysqli_fetch_array($result)) {
            $data[] = $row;
        };

        // returning response in JSON format
        echo json_encode($data);
        ?>