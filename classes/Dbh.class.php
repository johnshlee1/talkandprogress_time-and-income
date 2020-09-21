<?php

    class Dbh {

    //local database
        private $host = "localhost";
        private $user = "root";
        private $pwd = "";
        private $dbName = "talkandprogress_cycle1";
        
/*
    //online database
        private $host = "talkandprogress.com.mysql";
        private $user = "talkandprogress_com_cycle_1";
        private $pwd = "tnp12049";
        private $dbName = "talkandprogress_com_cycle_1";
        */

        protected function connect() {
            try {
                $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->dbName . ';charset=utf8mb4'; 
                $pdo = new PDO($dsn, $this->user, $this->pwd);
                $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
                return $pdo;
            } catch (PDOException $e){
                // if connection fails, show PDO error. 
              echo "Error connecting to mysql: " . $e->getMessage();
        }
    }
}
