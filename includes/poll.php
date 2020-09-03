<?php
include_once 'connect.php';

$_id = $_GET['_id']; 

$result = mysqli_query($conn, "SELECT id FROM collection ORDER BY id DESC LIMIT 1");
while($row = mysqli_fetch_array($result)) {
    $new_id = $row['id']; 
    
    while ($new_id <= $_id) {
        usleep(10000);
        clearstatcache();
        $result = mysqli_query($conn, "SELECT id FROM collection ORDER BY id DESC LIMIT 1");
        while($row = mysqli_fetch_array($result)) {
            $new_id = $row['id'];
        }
    }
};
$sql = mysqli_query($conn, "SELECT * FROM collection ORDER BY id DESC LIMIT 1");
while($row = mysqli_fetch_array($sql)) {
            $answer = $row['answer'];
            $country = $row['country'];
            $date = $row['date'];
}
$response = array();
$response['answer'] = $answer;
$response['country'] = $country;
$response['date'] = $date;
$response['_id'] = $new_id;
echo json_encode($response);
?>