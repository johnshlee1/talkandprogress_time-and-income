//MODAL
// Get the modal
const body = document.querySelector("body");
const iModal = document.getElementById("iModal");
const whatModal = document.getElementById("whatModal");
const talkModal = document.getElementById("talkModal");
const modal = document.querySelector('.modal');
talkModal.style.display = "block"; //required for noModal(){if()}

// Get the button that opens the modal
const iBtn = document.getElementById("iBtn");
const iGrid =  document.querySelector(".iGrid");
const talkBtn = document.getElementById("talkBtn");
const whatBtn = document.getElementById("whatBtn");
const loadBtn = document.getElementById("loadBtn");
// Get the <span> tag that closes the modal
const talkClose = document.getElementsByClassName("talk-close")[0];
const whatClose = document.getElementsByClassName("what-close")[0];

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
      };

      //displays collectionPage
      //noModal();
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
      const topBarGrid = document.querySelector(".TOP-BAR-GRID");
      topBarGrid.style.backgroundColor = "white";
      iBtn.style.color = "black";
      iBtn.style.borderColor = "black";
      collectionPage.style.display = "block";
      body.style.background = "white";
}


//clicking anywhere besides these buttons closes iModal
document.addEventListener('click', function(event) {
      const isClickInsideiBtn = iBtn.contains(event.target);
      const isClickInsideiModal = iModal.contains(event.target);
      const isClickInsidetalkClose = talkClose.contains(event.target);
      const isClickInsidewhatClose = whatClose.contains(event.target);
      const isClickInsidetalkBtn = talkBtn.contains(event.target);
      const isClickInsidewhatBtn = whatBtn.contains(event.target);
    
      if (iModal.style.display==="block" && !isClickInsideiBtn && !isClickInsideiModal &&
            !isClickInsidetalkClose && !isClickInsidewhatClose && 
            ! isClickInsidetalkBtn && !isClickInsidewhatBtn) {
            iModal.style.display = "none";
            if (collectionPage.style.display!=="block" && talkModal.style.display !== "block" && (iModal.style.display !== "block" && whatModal.style.display !== "block")) {
                  getTenItems();
                  loadCollectionPageStyle();
            } 
      } 

      //displays collectionPage
      //noModal();
});


// brings z-index hierarchy of Modals forward with a click
document.addEventListener('click', function(event) {
      const isClickInsidetalkModal = talkModal.contains(event.target);
      const isClickInsidewhatModal = whatModal.contains(event.target);
      const isClickInsidetalkBtn = talkBtn.contains(event.target);
      const isClickInsidewhatBtn = whatBtn.contains(event.target);
      
      if (isClickInsidetalkModal || isClickInsidetalkBtn) {
            talkModal.style.zIndex = "3";
            whatModal.style.zIndex = "2";
      } else if (isClickInsidewhatModal || isClickInsidewhatBtn) {
            whatModal.style.zIndex = "3";
            talkModal.style.zIndex = "2";
      }
});



// When the user clicks on the NavBar button, open the modal
talkBtn.onclick = function() {
      talkModal.style.top = "10px";
      talkModal.style.right = "0";
      talkModal.style.bottom = "0";
      talkModal.style.left = "430px";
      talkModal.style.display = "block";
};
whatBtn.onclick = function() {
      whatModal.style.top = "10px";
      whatModal.style.right = "0";
      whatModal.style.bottom = "0";
      whatModal.style.left = "900px";
      whatModal.style.display = "block";
  };


// When the user clicks on <span> (x), close the modal
talkClose.onclick = function() {
      talkModal.style.display = "none";
      talkModal.style.top = "10px";
      talkModal.style.right = "0";
      talkModal.style.bottom = "0";
      talkModal.style.left = "430px";
      if (collectionPage.style.display !== "block") {
            noModal();
            if (talkModal.style.display !== "block" && (iModal.style.display !== "block" && whatModal.style.display !== "block")) {
                  getTenItems();
            } 
      }
};
whatClose.onclick = function() {
      whatModal.style.display = "none";
      whatModal.style.top = "10px";
      whatModal.style.right = "0";
      whatModal.style.bottom = "0";
      whatModal.style.left = "900px";
      if (collectionPage.style.display !== "block") {
            noModal();
            if (talkModal.style.display !== "block" && (iModal.style.display !== "block" && whatModal.style.display !== "block")) {
                  getTenItems();
            } 
      }
}

/*
// Textarea autoExpand
document.addEventListener('input', function (event) {
      if (event.target.tagName.toLowerCase() !== 'textarea') {
          return;
      }
      autoExpand(event.target);
}, false);
*/

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
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
      };
};

//ANSWER SUBMISSIONS and DATA STORAGE

  //Get four elements and assign them to variables.
const form = document.getElementById("input-form");
const inputText = document.getElementById("answer-text");
//const inputCountry = document.getElementById("country");
const sendBtn = document.querySelector(".sendBtn");
const collectionBtn = document.getElementById("collectionBtn");
const collectionPage = document.getElementById("collectionPage");
const collection = document.getElementById("answer-collection");

function createDivs () {
      //create divs for each data property
      const divFill = document.createElement('div');
      const divAnsw = document.createElement('div');
   //   const divCoun = document.createElement('div');
      const divDate = document.createElement('div');
      const divUnit = document.createElement("div");
      const row = document.createElement("div");

      //css bootstrap
      divFill.classList.add("col-md-5");
      divAnsw.classList.add("col-md-5");
      divAnsw.classList.add("answer");
      row.classList.add("col-md-2");
     // divCoun.classList.add("country");
      divDate.classList.add("date");
      divUnit.classList.add("row");
      divUnit.classList.add("dataUnit");
}

// counts the text of input when typing
function CountRemaining() {
      var stringCount = document.getElementById("answer-text").value.length;
      document.getElementById("stringCounter").textContent = stringCount + "/600";
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

var offsetCount  = 0;
var last_id;
var initialLoadKey = {key: false};

// GET LONG POLL
function getNewData () {
      $.ajax({
            type: "GET",
            url: "includes/poll.php?_id="+_id,
            async: true,
            cache: false,
            timeout: 50000,
            success: function(data) {
                  console.log("data =", data);
                  var json = eval('('+data+ ')');
                  if(json['msg'] != "") {
                        console.log("json =", json);
                  }
                  _id = json['_id'];
                  last_id = json['_id'];
                  console.log("last_id =", last_id);

                  if(collectionPage.style.display === "block") {
                        if(initialLoadKey.key === false) {
                              initGetTen();

                              const divFill = document.createElement('div');
                              const divAnsw = document.createElement('div');
                             // const divCoun = document.createElement('div');
                              const divDate = document.createElement('div');
                              const divUnit = document.createElement("div");
                              const row = document.createElement("div");

                              //css bootstrap
                              divFill.classList.add("col-md-5");
                              divAnsw.classList.add("col-md-5");
                              divAnsw.classList.add("answer");
                              row.classList.add("col-md-2");
                              //divCoun.classList.add("country");
                              divDate.classList.add("date");
                              divUnit.classList.add("row");
                              divUnit.classList.add("dataUnit");

                              //puts each item of data into a unit to display in HTML
                              divAnsw.textContent = json['answer'];
                             // divCoun.textContent = json['country'];
                              divDate.textContent = json['date'];

                              //combine data as one unit
                              row.append(divDate);
                              divUnit.append(divFill, divAnsw, row);
                              
                              //prepend the new data to collection
                              collection.prepend(divUnit);
                              offsetCount += 1;
                              initialLoadKey.key = true;
                        } else {
                              //create divs for each data property
                              const divFill = document.createElement('div');
                              const divAnsw = document.createElement('div');
                             // const divCoun = document.createElement('div');
                              const divDate = document.createElement('div');
                              const divUnit = document.createElement("div");
                              const row = document.createElement("div");

                              //css bootstrap
                              divFill.classList.add("col-md-5");
                              divAnsw.classList.add("col-md-5");
                              divAnsw.classList.add("answer");
                              row.classList.add("col-md-2");
                           //   divCoun.classList.add("country");
                              divDate.classList.add("date");
                              divUnit.classList.add("row");
                              divUnit.classList.add("dataUnit");

                              //puts each item of data into a unit to display in HTML
                              divAnsw.textContent = json['answer'];
                          //    divCoun.textContent = json['country'];
                              divDate.textContent = json['date'];

                              //combine data as one unit
                              row.append(divDate);
                              divUnit.append(divFill, divAnsw, row);
                              
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


const initGetTen = () => {
      $.ajax({ 
              url: "includes/last_id.php",
              data: { 'last_id': last_id },
              type: 'POST',
              async: true,
              cache: false,
              success: function(data) {
                    console.log("initGetTen() =", data)
                    var json = eval('('+data+ ')');
                 //   last_id = json[0].id;
                    for (var a = 0; a < json.length; a++){
                        var answer = json[a].answer;
                    //    var country = json[a].country;
                        var date = json[a].date;
      
                        //create divs for each data property
                        const divFill = document.createElement('div');
                        const divAnsw = document.createElement('div');
                  //      const divCoun = document.createElement('div');
                        const divDate = document.createElement('div');
                        const divUnit = document.createElement("div");
                        const row = document.createElement("div");
      
                        //css bootstrap
                        divFill.classList.add("col-md-5");
                        divAnsw.classList.add("col-md-5");
                        divAnsw.classList.add("answer");
                        row.classList.add("col-md-2");
                   //     divCoun.classList.add("country");
                        divDate.classList.add("date");
                        divUnit.classList.add("row");
                        divUnit.classList.add("dataUnit");
                        
                        //puts each item of data into a unit to display in HTML
                        divAnsw.textContent = answer;
                   //     divCoun.textContent = country;
                        divDate.textContent = date;
      
                        //combine data as one unit
                        row.append(divDate);
                        divUnit.append(divFill, divAnsw, row);
                        
                        //append 10 data to collection
                        collection.append(divUnit);
                        console.log("appendedTen =", answer);
                    }
                    offsetCount += 9;
              }
      })
};


// GET Pagination by 10 items at a time
const getTenItems = () => {
      if (collectionPage.style.display === "block") {
            $.ajax({ 
                  url: "includes/getTenItems_after_send.php",
                  data: { 'offsetCount': offsetCount },
                  type: 'POST',
                  async: true,
                  cache: false,
                  success: function(data) {
                        console.log("getTenItems(); after send =", data)
                        var json = eval('('+data+ ')');
                        // last_id = json[json.length-1].id;
                        for (var a = 0; a < json.length; a++){
                              var answer = json[a].answer;
                              //var country = json[a].country;
                              var date = json[a].date;
            
                              //create divs for each data property
                              const divFill = document.createElement('div');
                              const divAnsw = document.createElement('div');
                              //const divCoun = document.createElement('div');
                              const divDate = document.createElement('div');
                              const divUnit = document.createElement("div");
                              const row = document.createElement("div");
            
                              //css bootstrap
                              divFill.classList.add("col-md-5");
                              divAnsw.classList.add("col-md-5");
                              divAnsw.classList.add("answer");
                              row.classList.add("col-md-2");
                              //divCoun.classList.add("country");
                              divDate.classList.add("date");
                              divUnit.classList.add("row");
                              divUnit.classList.add("dataUnit");
                              
                              //puts each item of data into a unit to display in HTML
                              divAnsw.textContent = answer;
                              //divCoun.textContent = country;
                              divDate.textContent = date;
            
                              //combine data as one unit
                              row.append(divDate);
                              divUnit.append(divFill, divAnsw, row);
                              
                              //append 10 data to collection
                              collection.append(divUnit);
                              console.log("appendedTen =", answer);
                        }
                        offsetCount += 10;
                  },
                  error: function(request, status, error){
                        alert("Error: Could not proceed");
                  }
            });
      } else if (collectionPage.style.display !== "block") {
            $.ajax({ 
                  url: "includes/getTenItems_w-o_send.php",
                  type: 'GET',
                  async: true,
                  cache: false,
                  success: function(data) {
                        console.log("getTenItems(); w/o send =", data)
                        var json = eval('('+data+ ')');
                        // last_id = json[json.length-1].id;
                        for (var a = 0; a < json.length; a++){
                              var answer = json[a].answer;
                           //   var country = json[a].country;
                              var date = json[a].date;
            
                              //create divs for each data property
                              const divFill = document.createElement('div');
                              const divAnsw = document.createElement('div');
                           //   const divCoun = document.createElement('div');
                              const divDate = document.createElement('div');
                              const divUnit = document.createElement("div");
                              const row = document.createElement("div");
            
                              //css bootstrap
                              divFill.classList.add("col-md-5");
                              divAnsw.classList.add("col-md-5");
                              divAnsw.classList.add("answer");
                              row.classList.add("col-md-2");
                         //     divCoun.classList.add("country");
                              divDate.classList.add("date");
                              divUnit.classList.add("row");
                              divUnit.classList.add("dataUnit");
                              
                              //puts each item of data into a unit to display in HTML
                              divAnsw.textContent = answer;
                         //     divCoun.textContent = country;
                              divDate.textContent = date;
            
                              //combine data as one unit
                              row.append(divDate);
                              divUnit.append(divFill, divAnsw, row);
                              
                              //append 10 data to collection
                              collection.append(divUnit);
                              console.log("appendedTen =", answer);
                        }
                        offsetCount += 10;
                  },
                  error: function(request, status, error){
                        alert("Error: Could not proceed");
                  }
            });
      }
};



// GET Data Count
const getDataCount = () => {
      sendHttpRequest('GET', "includes/getDataCount.php").then(response => {
            collectionBtn.textContent = response;
      })
};

/*
const postData = () => {
      sendHttpRequest('POST', 'includes/postItem.php', {'answer': inputText.value }
      ).then(response => {
            console.log(response);
      }).catch(err => {
            console.log(err);
      });
      return false;
};
*/
/*
const postData = () => {
      if (inputText.value === null || inputText.value.match(/^ *$/) !== null) {
            alert("Please share your desires!");
            return;
      } else { 
            $.ajax({
                  type: 'POST',
                  url: 'includes/postItem.php',
                  data: $('#input-form').serialize(),
                  success: function(response){
                        console.log("The answer", response);
                  }
            });
      }
      return false;
};
*/

// POST DATA
const postData = () => {
      if (inputText.value === null || inputText.value.match(/^ *$/) !== null) {
            alert("Please share your desires!");
            return;
      } else { 
            $.ajax({
                  type: 'POST',
                  url: 'includes/post.php',
                  async: true,
                  cache: false,
                  data: {'answer': inputText.value },
                  success: function(response){
                        console.log("The answer", response);
                  }
            });
      }
      return false;
};


// POST DATA => Trigger additional Functions when clicking sendBtn
const clickSend = () => {
      if (inputText.value === null || inputText.value.match(/^ *$/) !== null) {
            return;
      } else {
            if (collectionPage.style.display !== "block") {
                 
                  talkModal.style.display = "none";
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
            getTenItems();
            loadCollectionPageStyle();
      }
});

//Load more content by loadBtn
loadBtn.addEventListener('click', function(){
      getTenItems();
});