<?php
      include_once 'includes/connect.php';
      $result = mysqli_query($conn, "SELECT id FROM collection ORDER BY id DESC LIMIT 1");
      while($row = mysqli_fetch_array($result)) {
            $_id = $row['id'];
      };
?>

<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">

      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.min.css">

      <!-- main css -->
      <link rel="stylesheet" href="css/main.css">

      <title>Talk & Progress</title>
      <script type="text/javascript" charset="utf-8">
            var _id = <?php echo $_id; ?>;
            var dataCount = _id;
      </script>
</head>



<body>
      <!-----------------------------------------CONTAINER -------------------------------------------->
      <div class="container-fluid no-fouc">
        
            <div class="iGrid" style="top:15px; left:15px;"> <!-----  iBtn & iMODAL GRID ----->
                  <!-- iBtn & iMODAL -->
                  <div class="iBtn" style="top:15px; left:10px;">
                        <button id="iBtn"> 
                          &nbsp; i &nbsp; 
                        </button>
                  </div>


                  <!-- iMODAL -->
                  <div id="iModal" class="iModal modal">
                          <div class="credit">

                                <p>
                                  Concept and initiative: <br>
                                  Jonas W. Bundgaard,  Amanda-Li Kollberg, <br>
                                  Svenja Prigge, Siri Lee Lindskrog, <br>
                                  John Seung-Hwan Lee
                                </p>

                                <p>
                                  Website Design: <br>
                                  Studio jetzt-immer 
                                </p>

                                <p>
                                  Web development: <br>
                                  John Seung-Hwan Lee 
                                </p>

                                <p>
                                  Typeface: <br>
                                  AUTHENTIC Sans by Authentic<br>
                                  Business Company LLC.
                                </p>

                          </div>
                  </div> <!-- closing iMODAL-->
            </div> <!-- closing iMODAL & iBtn GRID-->


            <!-------------------------------- TOP BAR  -------------------------------->
            <div name="TOP-BAR-GRID" class="TOP-BAR-GRID row row-no-gutters">
                  
                  <div class="filler col-xs-3 col-md-6"></div>

                  <!--talkBtn-->
                  <div class="col-xs-3 col-md-2" style="bottom:15px;">
                        <button id="talkBtn">TALK</button>
                  </div>

                  <!--whatBtn-->
                  <div class="col-xs-3 col-md-2" style="bottom:15px;">
                        <button id="whatBtn">WHAT?</button>
                  </div>

                  <!--collectionBtn-->
                  <div class="col-xs-3 col-md-2" style="bottom:15px;">
                        <button id="collectionBtn">
                               <?php
                                    $sqlCount = "SELECT count(id) AS total FROM collection";
                                    $resultCount = mysqli_query($conn, $sqlCount);
                        
                                    $values = mysqli_fetch_assoc($resultCount);
                                    $num_rows = $values['total'];
                                    echo $num_rows;
                              ?>
                        </button>
                  </div>


            </div> <!--------------------- closing TOP BAR ------------------------>





              <!----------------------- MODAL ----------------------->
              <div name="MODAL-GRID" class="row row-no-gutters col-12 text-center">

                    <!-- talkMODAL -->        
                    <div id="talkModal" class="modal" draggable="true" ondragstart="console.log('dragging')">

                          <div id="talkModalHeader">
                                TALK
                                <span class="close talk-close">&times;</span>
                          </div>

                          <div class="talk-question my-5" style="z-index: 10;" draggable="true"
                          ondragstart="event.preventDefault();
                                       event.stopPropagation();">
                                <p id="question">
                                      What would you do with your time if you didn’t have to think about making income?
                                </p>
                          </div>
                        

                          <form id="input-form" class="form-inline" name="form _id" action="includes/postItem.php" method="POST" onsubmit="return !!(postData() & clickSend());">

                                <textarea id="answer-text" class="form-control form-control-lg" name="answer" style="z-index: 10;"
                                type='text' minlength="1" maxlength="600" size="10" 
                                placeholder="Write here ..." pattern="^\d*[a-zA-Z][a-zA-Z0-9]*$" required draggable="true"
                                ondragstart="event.preventDefault();
                                             event.stopPropagation();"></textarea>

                                <div class="row talk-modal-bottom-row">
                                      <p id="stringCounter" class="w-20 my-2 mx-2 px-4 text-center font-weight-bold letter-count" style="z-index: 10;"></p>
                                      <button class="btn btn-lg my-2 mx-2 sendBtn" type="submit" name="submit" style="z-index: 10;">
                                            <span>Send</span>
                                      </button>
                                </div>

                                <div class="country-selector" style="text-align:center; z-index:10;">
                                      <script type= "text/javascript" src = "js/countries.js"></script>
                                            Where do you live now?    
                                      <select id="country" name ="country"></select>
                                </div>
                                <script language="javascript">
                                      populateCountries("country");
                                </script> 
                                
                          </form>

                    </div>

                    <!-- whatMODAL -->     
                    <div id="whatModal" class="modal align-items-center">        

                          <div id="whatModalHeader">WHAT
                                <span class="close what-close">&times;</span>
                          </div>

                          <div class="about my-5 px-4">
                                <p>
                                      Talk & Progress is a series of 3 discussion nights which has manifested in this website bla bla... 
                                      Talk & Progress is a series of 3 discussion nights which has manifested in this website bla bla...
                                      Talk & Progress is a series of 3 discussion in this website bla bla...
                                </p>
                          </div>
                          
                          <div class="row float-right email-copy" >
                                <div id="email" class="col my-2 text-center font-weight-bold">
                                      talk@progress.com
                                </div>
                                <!-- NOT NEEDED
                                <div class="col">
                                      <div class="btn btn-lg mx-4 my-2 emailBtn" onclick="copyEmail()">
                                            <span>copy</span>
                                      </div>
                                </div>
                                -->
                          </div>
                      
                    </div>

              </div> <!--------------------- closing MODAL---------------------->



            <!------------------------------------ numCntPage -------------------------------------->
            <div id="collectionPage" class="row row-no-gutters">
                
                  <div class="row">
                        <div class="col-md-7"> </div>
                        <div id="cpQuestion" class="col-md-3">
                          What would you do with your time if you<br> didn’t have to think about making income?
                        </div>
                  </div>

                  <form>
                        <input type="hidden" name="_id">
                  </form>     

                 
                  <div id="answer-collection"></div>

                  <button type="button" id="loadBtn" class="text-right" action="includes/getTenItems.php">load more...</button>
                  
            </div>

      </div> <!-------------------------------- closing CONTAINER --------------------------------->
</body>


<!-- jquery -->
<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
<!-- bootstrap js -->
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<!-- script js -->
<script type="text/javascript" src="js/app.js"></script>



</html>