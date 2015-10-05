//function init ( )
//{
 // timeDisplay = document.createTextNode ( "" );
 //document.getElementById("clock").appendChild ( timeDisplay );
 //}

//function updateClock ()
//{}

// Create Date boject
//var currentTime = new Date ();


// Extract hours, minutes, and seconds of the current time from Date object
//var currentHours = currentTime.getHours ();
//var currentMinutes = currentTime.getMinutes ();
//var currentSeconds = currentTime.getSeconds ();

// Add leading zero for minutes and seconds, if required
// Ternary operator returns the value before the colon if the condition before the query (?) is true, or the value after the colon if the condition is false
//currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
//currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

// Set variable for time of day
//var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";
//currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;
//currentHours = ( currentHours == 0 ) ? 12 : currentHours;

// Create string for hours, minutes, and seconds
//var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds; //+ " " + timeOfDay;

// Insert the clcok string into the span
//document.getElementById("clock").firstChild.nodeValue = currentTimeString;
//}
//setInterval('updateClock()', 1000 );

function setTime(){
var timeNow = new Date();

var hoursNow = timeNow.getHours();
var minutesNow = timeNow.getMinutes();
var secondsNow = timeNow.getSeconds();

 if(minutesNow < 10) {
   minutesNow = '0'+minutesNow;
 }

if(secondsNow < 10) {
   // console.log(secondsNow);
   secondsNow = '0'+secondsNow;
 }

var currentTime = hoursNow+":"+minutesNow+":"+secondsNow;

// console.log(currentTime);
$('.clock').html(currentTime);
}
window.onload = setTime();
setInterval('setTime()', 1000);