<?php
      include 'includes/class-autoload.inc.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <!-- fontawsome arrow --> 
      <script type="text/javascript" src="https://kit.fontawesome.com/a076d05399.js"></script>
      <!-- bootstrap css -->
      <link rel="stylesheet" href="css/bootstrap.min.css">

      <!-- main css -->
      <link rel="stylesheet" href="css/main.css">

      <title>Talk & Progress</title>
      <script type="text/javascript" charset="utf-8">
                 var _id = <?php $_id = new View_id();?>;
        //         console.log(_id);
      </script>


</head>



<body>
            <!-----------------------------------------HEADER -------------------------------------------->
            <div class="header">
                                                
                        <!--iBtn-->
                        <div class="iBtn">
                              <button id="iBtn"> 
                              &nbsp; i &nbsp; 
                              </button>
                        </div>              

                        <!--talkBtn-->
                        <div class="talkBtn" style="bottom:10px;">
                              <button id="talkBtn">TALK</button>
                        </div>

                        <!--whatBtn-->
                        <div class="whatBtn" style="bottom:10px;">
                              <button id="whatBtn">WHAT?</button>
                        </div>

                        <!--collectionBtn-->
                        <div class="collectionBtn" style="bottom:10px;">
                              <button id="collectionBtn">
                                    <?php
                                    $viewDataCount = new ViewDataCount();
                                    ?>
                              </button>
                        </div>

            </div>      <!--------------------------------CLOSING HEADER-------------------------------->



            <!----------------------------------- COLLECTION PAGE -------------------------------------->
            <div id="collectionPage">
                                                
                        <div class="questionRow">
                              <div class="questionCP">What would you do with your time if you<br> didn’t have to think about making income?</div>
                              <div class="questionDate">2020-09-17 <br> 00:00:00</div>
                        </div>

                        

                        <div id="answer-collection" class="initialLoad answerRow"></div>



                        <div id="loading" class="loadingRow">

                              <img id="inview" src="css/img/loader.gif" alt="Loading..." width="50px" height="15px">

                              <div id="nomore">There is no more</div>

                              <form>
                                    <input type="hidden" name="_id">
                              </form>    

                              <!--     <button type="button" id="loadBtn" class="text-right" action="includes/getTenItems.php">load more...</button> -->

                        </div>

                        <div class="footer"></div>

                        

            </div>


             <!----------------------- MODALS ----------------------->
            <!-- iMODAL -->
            <div id="iModal" class="iModal" style="top: 20px; left: 85px;">           
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



            <!-- talkMODAL -->        
            <div id="talkModal" class="talkModal"> <!--  draggable="true" ondragstart="console.log('dragging')">-->        
                  
                  <div id="talkModalHeader">
                        TALK
                        <span class="close talk-close">&times;</span>
                  </div>

                  <div class="talkModalGrid">
                        <div id="question">
                              What would you do with your time if you <br/> didn’t have to think about making income?
                        </div>

                        <form id="input-form" class="form-inline" name="form _id" method="POST" onsubmit="return !!(postData() & clickSubmit());">
                              <div class="formGrid">
                                    <textarea id="answer-text" class="form-control form-control-lg" name="answer" type='text' minlength="1" maxlength="300" size="10" placeholder="Write here ..." pattern="^\d*[a-zA-Z][a-zA-Z0-9]*$"></textarea>

                        <!--        <div class="row talk-modal-bottom-row"> -->
                                    <p id="stringCounter" class="letter-count" ></p>
                                    <button class="btn submitBtn" type="submit" name="submit">
                                          Submit <i class='fas fa-arrow-right'></i>
                                    </button>
      <!--                            </div>   -->
                              </div>
      <!--
                              <div class="country-selector" style="text-align:center; z-index:10;">
                                    <script type= "text/javascript" src = "js/countries.js"></script>
                                          Where do you live now?    
                                    <select id="country" name ="country"></select>
                              </div>

                              <script language="javascript">
                                    populateCountries("country");
                              </script> 
      -->
                        </form>

                  </div>
            </div>



            <!-- whatMODAL -->     
            <div id="whatModal" class="whatModal">        

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
                  </div>
            
            </div>

</body>


<!-- jquery -->
<script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="js/jquery.inview.min.js"></script>

<!-- bootstrap js -->
<script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
<!-- script js -->
<script type="text/javascript" src="js/app.js"></script>



</html>