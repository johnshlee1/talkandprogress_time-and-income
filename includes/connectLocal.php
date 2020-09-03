<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "talkandprogress";

// getting data from database
$conn = mysqli_connect($servername, $username, $password, $dbname) or die("Unable to connect");