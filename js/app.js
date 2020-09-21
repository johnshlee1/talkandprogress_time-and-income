//MODAL
// Get the modal
const body = document.querySelector("body"),
iModal = document.getElementById("iModal"),
whatModal = document.getElementById("whatModal"),
talkModal = document.getElementById("talkModal"),
modal = document.querySelector('.modal');
talkModal.style.display = "block"; //required for noModal(){if()}

// Get the button that opens the modal
const iBtn = document.getElementById("iBtn"),
iGrid =  document.querySelector(".iGrid"),
talkBtn = document.getElementById("talkBtn"),
whatBtn = document.getElementById("whatBtn");
//loadBtn = document.getElementById("loadBtn");
// Get the <span> tag that closes the modal
const talkClose = document.getElementsByClassName("talk-close")[0],
whatClose = document.getElementsByClassName("what-close")[0];

// brings iModal forward when clicking iBtn 
// and closes iModal when clicking again
iBtn.addEventListener('click', function() {
      if(iModal.style.display === "none") {
        iModal.style.display = "block";
        iModal.style.zIndex = "3";
        iGrid.style.zIndex = "3";
        iBtn.style.zIndex = "3";
        whatModal.style.zIndex = "2";
        talkModal.style.zIndex = "2";
      } else {
        iModal.style.display = "none";
        iGrid.style.zIndex = "2";
        iBtn.style.zIndex = "2";
      }
});


/* if all modal windows are closed, display collectionPage,
but if collectionPage is already displayed, make no change. */
function noModal() {
      if (talkModal.style.display !== "block" && (iModal.style.display !== "block" && whatModal.style.display !== "block")){
            loadCollectionPageStyle();
      } else if (collectionPage.style.display === "block") {
            collectionPage.style.display = "block";
      } else {
            collectionPage.style.display = "none";
      }
}

function loadCollectionPageStyle() {
      const header = document.querySelector(".header");
      header.style.backgroundColor = "white";
      iBtn.style.color = "black";
      iBtn.style.borderColor = "black";
      collectionPage.style.display = "block";
      body.style.background = "white";
}


//clicking anywhere besides these buttons closes iModal
document.addEventListener('click', function(event) {
      const isClickInsideiBtn = iBtn.contains(event.target),
      isClickInsideiModal = iModal.contains(event.target),
      isClickInsidetalkClose = talkClose.contains(event.target),
      isClickInsidewhatClose = whatClose.contains(event.target),
      isClickInsidetalkBtn = talkBtn.contains(event.target),
      isClickInsidewhatBtn = whatBtn.contains(event.target);
    
      if (iModal.style.display==="block" && !isClickInsideiBtn && !isClickInsideiModal &&
            !isClickInsidetalkClose && !isClickInsidewhatClose && 
            ! isClickInsidetalkBtn && !isClickInsidewhatBtn) {
            iModal.style.display = "none";
            if (collectionPage.style.display!=="block" && talkModal.style.display !== "block" && (iModal.style.display !== "block" && whatModal.style.display !== "block")) {
                  getTenData();
                  loadCollectionPageStyle();
            } 
      } 
});




// When the user clicks on the NavBar button, open the modal

talkBtn.onclick = function() {
            talkModal.style.top = "100px";
            talkModal.style.left = "430px";
            talkModal.style.display = "block";
};
whatBtn.onclick = function() {

            whatModal.style.top = "100px";
            whatModal.style.left = "900px";
            whatModal.style.display = "block";
};
  
// This needs a further work
// Modal Position Media Query
$(window).resize(function(){     
      if ($('#question').css("font-size") == "25px"){
            talkBtn.onclick = function() {
                  talkModal.style.top = "100px";
                  talkModal.style.left = "430px";
                  talkModal.style.display = "block";
            }
            whatBtn.onclick = function() {
                  whatModal.style.top = "100px";
                  whatModal.style.left = "900px";
                  whatModal.style.display = "block";
            };
      } else if ($('#question').css("font-size") == "22px" || $('#question').css("font-size") == "18px"){
            talkBtn.onclick = function() {
                  talkModal.style.top = "70px";
                  talkModal.style.left = "80px";
                  talkModal.style.display = "block";
            };/*
            whatBtn.onclick = function() {
                  whatModal.style.top = "px";
                  whatModal.style.left = "px";
            }*/
      } else if ($('#question').css("font-size") == "16px") {
            talkBtn.onclick = function() {
                  talkModal.style.top = "54px";
                  talkModal.style.left = "23px";
                  talkModal.style.display = "block";
            };/*
            whatBtn.onclick = function() {
                  whatModal.style.top = "px";
                  whatModal.style.left = "px";
            }*/
      } else if ($('#question').css("font-size") == "13px" || $('#question').css("font-size") == "12px") {
            talkBtn.onclick = function() {
                  talkModal.style.top = "45px";
                  talkModal.style.left = "23px";
                  talkModal.style.display = "block";
            };/*
            whatBtn.onclick = function() {
                  whatModal.style.top = "px";
                  whatModal.style.left = "1px";
            }*/
      } else if ($('#question').css("font-size") == "10px") {
            talkBtn.onclick = function() {
                  talkModal.style.top = "30px";
                  talkModal.style.left = "15px";
                  talkModal.style.display = "block";
            };/*
            whatBtn.onclick = function() {
                  whatModal.style.top = "px";
                  whatModal.style.left = "px";
            }*/
      };
});


// brings z-index hierarchy of Modals forward with a click
document.addEventListener('click', function(event) {
      const isClickInsidetalkModal = talkModal.contains(event.target),
      isClickInsidewhatModal = whatModal.contains(event.target),
      isClickInsidetalkBtn = document.querySelector(".talkBtn").contains(event.target),
      isClickInsidewhatBtn = document.querySelector(".whatBtn").contains(event.target);
      
      if (isClickInsidetalkModal || isClickInsidetalkBtn) {
            talkModal.style.zIndex = "3";
            whatModal.style.zIndex = "2";
      } else if (isClickInsidewhatModal || isClickInsidewhatBtn) {
            whatModal.style.zIndex = "3";
            talkModal.style.zIndex = "2";
      }
});


// When the user clicks on <span> (x), close the modal
talkClose.onclick = function() {
      talkModal.style.display = "none";
      talkModal.style.top = "100px";
      talkModal.style.right = "0";
      talkModal.style.bottom = "0";
      talkModal.style.left = "430px";
      if (collectionPage.style.display !== "block" && talkModal.style.display !== "block" && (iModal.style.display !== "block" && whatModal.style.display !== "block")) {
            getTenData();
            loadCollectionPageStyle();
      }
};
whatClose.onclick = function() {
      whatModal.style.display = "none";
      whatModal.style.top = "100px";
      whatModal.style.right = "0";
      whatModal.style.bottom = "0";
      whatModal.style.left = "900px";
      if (collectionPage.style.display !== "block" && talkModal.style.display !== "block" && (iModal.style.display !== "block" && whatModal.style.display !== "block")) {
            getTenData();
            loadCollectionPageStyle();
      }
};



var autoExpand = function(field){
      // Reset field height
      field.style.height = 'inherit';
  
      // Get the computed styles for the element
      var computed = window.getComputedStyle(field);
  
      // Calculate the height
      var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                  + parseInt(computed.getPropertyValue('padding-top'), 10)
                  + field.scrollHeight
                  + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                  + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
  
        field.style.height = height + 'px';
  };

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);


//DRAGGABLE
//Make the DIV element draggable:
dragElement(talkModal);
dragElement(whatModal);

function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "Header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
      } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
      };
      function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
      };

      function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      };

      function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
      };
};



//ANSWER SUBMISSIONS and DATA STORAGE

  //Get four elements and assign them to variables.
const form = document.getElementById("input-form"),
inputText = document.getElementById("answer-text"),
submitBtn = document.querySelector(".submitBtn"),
collectionBtn = document.getElementById("collectionBtn"),
collectionPage = document.getElementById("collectionPage"),
collection = document.getElementById("answer-collection"),
nomore = document.getElementById("nomore");



// counts the text of input when typing
function CountRemaining() {
      var stringCount = document.getElementById("answer-text").value.length;
      document.getElementById("stringCounter").textContent = stringCount + "/300";
      setTimeout(function(){ CountRemaining(); },0);
};

CountRemaining();




//XML
const sendHttpRequest = (method, url, data) => {
      const promise = new Promise((resolve, reject) => {
            const ajax = new XMLHttpRequest();
            const asynchronous = true;
      
            ajax.open(method, url, asynchronous);
  
            ajax.responseType = 'json';
            
            if (data) {
                  ajax.setRequestHeader('Content', 'application/json');
            };
  
            // receiving response from url
            ajax.onload = () => {
                  if (ajax.status >= 400) {
                        reject(ajax.response);
                  } else {
                        resolve(ajax.response);
                  }
            };
  
            ajax.onerror = () => {
                  reject('Something went wrong!')
            };
  
            // sending ajax request
            ajax.send(JSON.stringify(data));
      });
  
      return promise;
};
  
var offsetCount = 0, last_id;

// GET LONG POLL
function getNewData() {
      $.ajax({
            type: "GET",
            url: "includes/ViewNewPoll.inc.php?_id="+_id,
            async: true,
            cache: false,
            timeout: 50000,
            success: function(data) {
                  console.log("data =", data);
                  var json = eval('('+data+')');
                  if(json['msg'] != "") {
                        console.log("json =", json);
                  };
                  _id = json['_id'];
                  last_id = json['_id'];
                  console.log("last_id =", last_id);

                  if(collectionPage.style.display === "block") {
                        if(collection.classList.contains("initialLoad") === true) {
                              getNineSinceLast_ID();

                              //create divs for each data property
                              const pAnsw = document.createElement('p');
                              const pDate = document.createElement('p');
                              const divUnit = document.createElement("div");

                              //css bootstrap
                              divUnit.classList.add("dataUnit");
                              pAnsw.classList.add("answer");
                              pDate.classList.add("date");

                              //puts each item of data into a unit to display in HTML
                              pAnsw.textContent = json['answer'];
                              pDate.textContent = json['date'];

                              //combine data as one unit
                              divUnit.append(pAnsw, pDate);
                              
                              //prepend the new data to collection
                              collection.prepend(divUnit);
                              offsetCount += 1;
                              collection.classList.remove("initialLoad");
                        } else {
                              //create divs for each data property
                              const pAnsw = document.createElement('p');
                              const pDate = document.createElement('p');
                              const divUnit = document.createElement("div");

                              //css bootstrap
                              divUnit.classList.add("dataUnit");
                              pAnsw.classList.add("answer");
                              pDate.classList.add("date");

                              //puts each item of data into a unit to display in HTML
                              pAnsw.textContent = json['answer'];
                              pDate.textContent = json['date'];

                              //combine data as one unit
                              divUnit.append(pAnsw, pDate);
                              
                              //prepend the new data to collection
                              collection.prepend(divUnit);
                              offsetCount += 1;
                        }
                  }
                  getDataCount();
                  setTimeout('getNewData()', 1000);
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                  console.log("error:" + textStatus + " (" + errorThrown + ")");
                  setTimeout('getNewData()', 15000);
            }
      });
};
$(document).ready(function(){
      getNewData();
});

const getNineSinceLast_ID = () => {
      $.ajax({ 
                  url: "includes/ViewNineSinceLast_ID.inc.php",
                  data: { 'last_id': last_id },
                  type: 'POST',
                  async: true,
                  cache: false,
                  success: function(data) {
                        console.log("getNineSinceLast_ID() =", data)
                        var json = eval('('+data+ ')');
                        for (var a = 0; a < json.length; a++){
                        var answer = json[a].answer;
                        var date = json[a].date;

                        //create divs for each data property
                        const pAnsw = document.createElement('p');
                        const pDate = document.createElement('p');
                        const divUnit = document.createElement("div");

                        //css bootstrap
                        divUnit.classList.add("dataUnit");
                        pAnsw.classList.add("answer");
                        pDate.classList.add("date");
                        
                        //puts each item of data into a unit to display in HTML
                        pAnsw.textContent = answer;
                        pDate.textContent = date;

                        //combine data as one unit
                        divUnit.append(pAnsw, pDate);
                        
                        //append 10 data to collection
                        collection.append(divUnit);
                        offsetCount += 1;
                        }
                        
                  }
      })
};


// GET Pagination by 10 items at a time
const getTenData = () => {
      if (collectionPage.style.display === "block") {
            $.ajax({ 
                  url: "includes/ViewTenData_a.inc.php",
                  data: { 'offsetCount': offsetCount },
                  type: 'POST',
                  async: true,
                  cache: false,
                  success: function(data) {
                        console.log("ViewTenData_a() =", data);
                        var json = eval('('+data+ ')');
                        if (json.length <= 0){
                              console.log("There is no more!");
                              nomore.style.display = "block";
                              setTimeout(function(){nomore.style.display = "none"}, 2000)
                        } else {
                              for (var a = 0; a < json.length; a++){

                                    var answer = json[a].answer;
                                    var date = json[a].date;
                  
                                    //create divs for each data property
                                    const pAnsw = document.createElement('p');
                                    const pDate = document.createElement('p');
                                    const divUnit = document.createElement("div");
                  
                                    //css bootstrap
                                    divUnit.classList.add("dataUnit");
                                    pAnsw.classList.add("answer");
                                    
                                    //puts each item of data into a unit to display in HTML
                                    pAnsw.textContent = answer;
                                    pDate.textContent = date;
                  
                                    //combine data as one unit
                                    divUnit.append(pAnsw, pDate);
                                    
                                    //append 10 data to collection
                                    collection.append(divUnit);
                                    offsetCount += 1;
                              }
                        }
            //            console.log(offsetCount);

                  },
                  error: function(request, status, error){
                        console.log("Error: Could not proceed with getTenData_a()");
                  }
            });
      } else if (collectionPage.style.display !== "block") {
            $.ajax({ 
                  url: "includes/ViewTenData_b.inc.php",
                  type: 'GET',
                  async: true,
                  cache: false,
                  success: function(data) {
                        console.log("ViewTenData_b() =", data);
                        var json = eval('('+data+ ')');
                        if (json.length <= 0){
                              console.log("There is no more!");
                              nomore.style.display = "block";
                              setTimeout(function(){nomore.style.display = "none"}, 2000)
                        } else {
                              collection.classList.remove("initialLoad");
                              for (var a = 0; a < json.length; a++){
                                    var answer = json[a].answer;
                                    var date = json[a].date;
                  
                                    //create divs for each data property
                                    const pAnsw = document.createElement('p');
                                    const pDate = document.createElement('p');
                                    const divUnit = document.createElement("div");
   
                                    //css bootstrap
                                    divUnit.classList.add("dataUnit");
                                    pAnsw.classList.add("answer");
                                    pDate.classList.add("date");

                                    
                                    //puts each item of data into a unit to display in HTML
                                    pAnsw.textContent = answer;
                                    pDate.textContent = date;
                  
                                    //combine data as one unit
                                    divUnit.append(pAnsw, pDate);
                                    
                                    //append 10 data to collection
                                    collection.append(divUnit);
            //                      console.log("appendedTen =", answer);
                                    offsetCount += 1;
                              } 
                              
                        }  
            //            console.log(offsetCount);
                  },
                  error: function(request, status, error){
                        console.log("Error: Could not proceed with getTenData_b()");
                  }
            });
      }
};


// GET Data Count
const getDataCount = () => {
      sendHttpRequest('GET', "includes/ViewDataCount.inc.php").then(response => {
            collectionBtn.textContent = response;
      })
};


// POST DATA
const postData = () => {
      if (inputText.value === null) {
            
            inputText.placeholder = "Please share your desires!";
            setTimeout(function(){
                  inputText.placeholder = "Write here ...";
            }, 2000)
            return;
      } else if(inputText.value.match(/^ *$/) !== null) {
            inputText.value = "";
            inputText.placeholder = "Please share your desires!";
            setTimeout(function(){
                  inputText.placeholder = "Write here ...";
            }, 2000)

      }else { 
            $.ajax({
                  type: 'POST',
                  url: 'includes/ControlData.inc.php',
                  async: true,
                  cache: false,
                  data: {'answer': inputText.value },
                  success: function(response){
                        console.log("The answer =", response);
                  }
            });
      }
      return false;
};


// POST DATA => Trigger additional Functions when clicking submitBtn
const clickSubmit = () => {
      if (inputText.value === null || inputText.value.match(/^ *$/) !== null) {
            return;
      } else {
            if (collectionPage.style.display !== "block") {
                 
                  talkModal.style.display = "none";
                  whatModal.style.display = "none";
                  iModal.style.display = "none";
                  noModal();
                  form.reset();
            } else if(collectionPage.style.display === "block") {
                  talkModal.style.display = "none";
                  form.reset();
            }
      }
};


// Load the Collection Page

collectionBtn.addEventListener('click', () => {
      if (collectionPage.style.display !== "block") {
            getTenData();
            loadCollectionPageStyle();

      } else if (collectionPage.style.display === "block") {
            collectionPage.scrollTo(0,0);
      }
});

function newDataSeen() {
      var collectionPageRect = collectionPage.getBoundingClientRect(),
      collectionRect = collection.getBoundingClientRect(),
      offset = collectionRect.top - collectionPageRect.top;
      collection.addEventListener("scroll", function(){
            console.log("collPage-Top =", collectionPageRect.top, "coll =", collectionRect.top, "offset =", offset);
      });
}
newDataSeen();

$("#inview").on('inview', function(event, isInView) {
      if (isInView) {
      // element is now visible in the viewport
      $("#inview").css("visibility", "visible");
      setTimeout(function(){
            getTenData();
            $("#inview").css("visibility", "hidden");
      }, 1000)

      } 
});