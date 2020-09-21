<?php
class ModelData extends Dbh {
    protected function get_id() {
        $sql = "SELECT id FROM collection ORDER BY id DESC LIMIT 1;";
        $stmt = $this->connect()->query($sql);
        while($row = $stmt->fetch()) {
              $_id = $row['id'];
        }
        return $_id;
    }

    protected function getDataCount() {
        $sql = "SELECT count(*) FROM collection;";
        $num_rows = $this->connect()->query($sql)->fetchcolumn();
        return $num_rows;
    }


    protected function getNewPoll() {
        $_id = $_GET['_id']; 
        $sql = "SELECT id FROM collection ORDER BY id DESC LIMIT 1;";
        $stmt = $this->connect()->query($sql);
        
        while($row = $stmt->fetch()) {
            $new_id = $row['id']; 
    
            while ($new_id <= $_id) {
                usleep(10000);
                clearstatcache();
                $stmt = $this->connect()->query($sql);
                while($row = $stmt->fetch()) {
                    $new_id = $row['id'];
                }
            }
        }
        $result = $this->connect()->query("SELECT * FROM collection ORDER BY id DESC LIMIT 1;");
        while($row =  $result->fetch()) {
            $answer = $row['answer'];
            //$country = $row['country'];
            $date = $row['date'];
        }
        $response = array();
        $response['answer'] = $answer;
        //$response['country'] = $country;
        $response['date'] = $date;
        $response['_id'] = $new_id;
        return $response;
    }



    protected function getNineSinceLast_ID() {
        $last_id = $_POST[ 'last_id' ];
        $sql = "SELECT * FROM collection WHERE id < $last_id ORDER BY id DESC  LIMIT 9;";
        $stmt = $this->connect()->query($sql);
        $data = array();
        while($row = $stmt->fetch()) {
            $data[] = $row;
        }
        //echo json_encode($data);
        return $data;
    }



    protected function getTenData_a() {
        $offsetCount = $_POST[ 'offsetCount' ];
        $sql = "SELECT * FROM collection ORDER BY id DESC LIMIT 10 OFFSET $offsetCount;";
        $stmt = $this->connect()->query($sql);
        /* (alternatively, prepared statement should also work. But not sure if it makes it necessarily elevates security in this case)
        $stmt = $this->connect()->prepare($sql);
        $stmt->execute(); */
        $data = array();
        while($row = $stmt->fetch()) {
            $data[] = $row;
        }
        //(maybe not needed) echo json_encode($data);
        return $data;
    }



    protected function getTenData_b() {
        $sql = "SELECT * FROM collection ORDER BY id DESC LIMIT 10;";
        $stmt = $this->connect()->query($sql);
        $data = array();
        while($row = $stmt->fetch()) {
            $data[] = $row;
        }
        //echo json_encode($data);
        return $data;
    }

    

    //public $answer = $_POST['answer'];
    protected function setData() {
        if (/*$_POST && isset($_POST['answer'] &&*/ !empty($_POST)){
            $sql = "INSERT INTO collection (answer) VALUES (:answer);";
            $stmt = $this->connect()->prepare($sql);
            //(maybe not needed) $stmt->bindParam(1, $_POST['answer']);
            $answer = $_POST['answer'];
            $stmt->bindValue(':answer', $answer, PDO::PARAM_STR);
            $stmt->execute();

            exit;
        }
    }
}