var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var changePartyStatus = document.getElementById("partyTimeButton");
var isPartyTime = false;


var updateClock = function(){

     var lolcat = document.getElementById('lolcat');
     var message = document.getElementById('timeEvent');
     var messageText;
     var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

     if (time == partyTime){
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
          messageText = "IZ PARTEE TIME!!";
     } else if (time == napTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/napTime.jpg";
          messageText = "IZ NAP TIME...";
     } else if (time == lunchTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/lunchTime.jpg";
          messageText = "IZ NOM NOM NOM TIME!!";
     } else if (time == wakeUpTime) {
          image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
          messageText = "IZ TIME TO GETTUP.";
     } else if (time < noon) {
          messageText = "Good morning!";
     } else if (time > evening) {
          messageText = "Good Evening!";
     }else {
          messageText = "Good afternoon!";
     }

     message.innerText = messageText;
     lolcat.src = image;

     showCurrentTime();

};

var showCurrentTime = function() {
     // display the string on the webpage
     var clock = document.getElementById('clock');

     var currentTime = new Date();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     var seconds = currentTime.getSeconds();
     var meridian = "AM";

     // Set Hours
     if (hours >= noon){
          meridian = "PM";
     }

     if (hours > noon){
          hours = hours - 12;
     }

     // Set Minutes
     if (minutes < 10){
          minutes = "0" + minutes;
     }

     // Set Seconds
     if (seconds < 10){
          seconds = "0" + seconds;
     }

     // put together the string that displays the time
     var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

     clock.innerText = clockTime;
};


var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      changePartyStatus.innerText = "PARTY TIME!!!";
      changePartyStatus.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      changePartyStatus.innerText = "Party Over!";
      changePartyStatus.style.backgroundColor = "#222";
   }
};
changePartyStatus.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var wakeUpEvent = function(){
	wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function(){
	lunchTime = lunchTimeSelector.value;
};
var napEvent = function(){
	napTime = napTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

updateClock();
