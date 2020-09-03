/*
$(window).scroll(function () {
  // End of the document reached?
  if ($("#collectionPage").height() - $(this).height() == $(this).scrollTop()) {
    getDataIter();
  }
});
*/


/* NOT NEEDED
// Copy email from whatModal
function copyEmail() {
      var tempInput = document.createElement("input");
      tempInput.value = "talk@progress.com";
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
}
*/


/*
function postGet() {
    if (collectionPage.style.display !== "block"){
          getDataIter();
          
    };
};
*/


/*
// POST function using HttpRequest instead of jquery, but it submits NULL value
const postData = () => {
      sendHttpRequest('POST', 'includes/postItem.php'
      ).then(response => {
            console.log(response);
      }).catch(err => {
            console.log(err);
      });
      return false;
};
*/


/*
// POST w/ fetch()
sendBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputText.value === null || inputText.value.match(/^ *$/) !== null) {
        alert("Please share your desires!");
    } else { 

           /* async function postData() {

                  const data = {
                        answer: inputText.value,
                        country: inputCountry.value,
                        date: Date.now()
                  };

                  const options = {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                  };

                  form.reset();

                  const response = await fetch('/api', options);
                  const json = await response.json(data);
                  
                  console.log("post =", JSON.stringify(data));
            };

            postData();
         
            form.reset();
            talkModal.style.display = "none";
            //postGet();
            getDataNew();
            getDataCount();
            
            // if all modal windows are closed, display collectionPage,
            //but if collectionPage is already displayed, make no change. 
            noModal(); // invokes postGet(), which triggers getDataIter()
      };
});
   */


/*
async function getDataNew() {
      const response = await fetch('/api');
      const data = await response.json();
      
      for (var item of data){
            if (collectionPage.style.display === "block" && dataID.includes(item._id) === false && item._id === data.length) {
           
                  //create divs for each data property
                  const filler = document.createElement('div');
                  const answer = document.createElement('div');
                  const country = document.createElement('div');
                  const date = document.createElement('div');
                  const dataUnit = document.createElement("div");
                  const row = document.createElement("div");

                  //css bootstrap
                  filler.classList.add("col-md-5");
                  
                  answer.classList.add("col-md-5");
                  answer.classList.add("answer");

                  row.classList.add("col-md-2");
                  country.classList.add("country");
                  date.classList.add("date");

                  dataUnit.classList.add("row");
                  dataUnit.classList.add("dataUnit");

                  //puts each item of data into a unit to display in HTML
                  answer.textContent = `${item.answer}`;
                  country.textContent = `${item.country}`;
                  const dateString = new Date(item.date).toLocaleString();
                  date.textContent = dateString;

                  //combine data as one unit
                  row.append(country, date)
                  dataUnit.append(answer, row);

                  //prepend new data to collection
                  collection.prepend(dataUnit);
                  dataID.push(item._id);
                  backCounter += 1;
                  console.log("getNew = ", item);
            };
      };
};

async function getDataIter() {
      const response = await fetch('/api');
      const data = await response.json();

      const mark = data.length - backCounter;
      if (mark >= 10) {
            for(var i = mark - 1; i >= mark-10; i--) {
                  dataIterArr.push(data[i]);
                  backCounter+=1;

                  console.log("getDataIter = ", data[i]);
                  console.log("backCoutner = ", backCounter);
            };
      } else if (0 < mark < 10) {
            for(var i = mark - 1; i >= 0; i--) {
                  dataIterArr.push(data[i]);
                  backCounter+=1;

                  console.log("getDataIter = ", data[i]);
                  console.log("backCoutner = ", backCounter);
            };
      } else if (mark = 0) {
            return
      }
*/



/*
new PublishForm(form, 'index.php');
// random url parameter to avoid any caching issues
new SubscribePane(collection, 'subscribe?random=' + Math.random());

function PublishForm(form, url) {

      function sendAnswer(answer) {
        fetch(url, {
          method: 'POST',
          body: answer
        });
      }
    
      form.onsubmit = function() {
        let answer = form.answer.value;
        if (answer) {
          form.answer.value = '';
          sendAnswer(answer);
        }
        return false;
      };
}

// Receiving answers with long polling
function SubscribePane(elem, url) {

      function showAnswer( ) {
            var answer = responseData[a].answer;
            var country = responseData[a].country;
            var date = responseData[a].date;

            //create divs for each data property
            const divUnit = document.createElement("div");
            const divFill = document.createElement('div');
            const divAnsw = document.createElement('div');
            const row = document.createElement("div");
            const divCoun = document.createElement('div');
            const divDate = document.createElement('div');
      
            //css bootstrap
            divUnit.classList.add("row");
            divUnit.classList.add("dataUnit");
            divFill.classList.add("col-md-5");
            divAnsw.classList.add("col-md-5");
            divAnsw.classList.add("answer");
            row.classList.add("col-md-2");
            divCoun.classList.add("country");
            divDate.classList.add("date");
      
            //puts each item of data into a unit to display in HTML
            divAnsw.textContent = answer;
            divCoun.textContent = country;
            divDate.textContent = date;
      
            //combine data as one unit
            row.append(divCoun, divDate);
            divUnit.append(divFill, divAnsw, row);
      
            //prepend new data to collection
            elem.prepend(dataUnit);
            
            dataID.push(item._id);
            backCounter += 1;
            
            console.log("getNew = ", answer);
      }
    
      async function subscribe() {
        let response = await fetch(url);
    
        if (response.status == 502) {
          // Connection timeout
          // happens when the connection was pending for too long
          // let's reconnect
          await subscribe();
        } else if (response.status != 200) {
          // Show Error
          showAnswer(response.statusText);
          // Reconnect in one second
          await new Promise(resolve => setTimeout(resolve, 1000));
          await subscribe();
        } else {
          // Got message
          let answer = await response.text();
          showAnswer(answer);
          await subscribe();
        }
      }
    
      subscribe();
    
    }
*/



/*
// GET LONG POLL that worked, but TOO HEAVY
var timestamp = null,  lastNotificationIdentifier = '';

function getNewData () {
      $.ajax({
            type: "GET",
            url: "includes/getUpdate.php?timestamp="+timestamp,
            async: true,
            cache: false,
            timeout: 50000,
            success: function(data) {
                  var json = eval('('+data+ ')');
                  var localIdentifier = json[0].date; + json[0].id;
                  console.log(json);
                  //check if we've displayed this record/timestamp before
                  if (localIdentifier !== lastNotificationIdentifier) {

                        //if not then go ahead and show the notification
                        //$.notiny({ text: notinyName+"<span class='addScore'> +10</span>", width: '100%', image: notinyClass }); - this is the popup API call that I am passing the class and the name to

                        console.log("long poll= ", json[0].answer);
                        //making sure to save some unique information about having shown this notification
                        lastNotificationIdentifier = localIdentifier;
                  
                        //create divs for each data property
                        const divFill = document.createElement('div');
                        const divAnsw = document.createElement('div');
                        const divCoun = document.createElement('div');
                        const divDate = document.createElement('div');
                        const divUnit = document.createElement("div");
                        const row = document.createElement("div");

                        //css bootstrap
                        divFill.classList.add("col-md-5");
                        divAnsw.classList.add("col-md-5");
                        divAnsw.classList.add("answer");
                        row.classList.add("col-md-2");
                        divCoun.classList.add("country");
                        divDate.classList.add("date");
                        divUnit.classList.add("row");
                        divUnit.classList.add("dataUnit");

                        //puts each item of data into a unit to display in HTML
                        divAnsw.textContent = json[0].answer;
                        divCoun.textContent = json[0].country;
                        divDate.textContent = json[0].date;

                        //combine data as one unit
                        row.append(divCoun, divDate);
                        divUnit.append(divFill, divAnsw, row);
                        
                        //append 10 data to collection
                        collection.prepend(divUnit);
                  };

                  timestamp = json[0].timestamp;

                  setTimeout(getNewData(), 1000);
            }
      });
};
*/



/*
// GET New Data using WEBSOCKET
var webSocket = new WebSocket("http://localhost/UBI%20Website/public/index.php", "protocolOne");

webSocket.onopen = function () {
      console.log("test 123")
}

//webSocket.send("test 123");
*/


/*
// POST DATA
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