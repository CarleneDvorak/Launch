var request = new XMLHttpRequest();
request.open('GET', 'https://launchlibrary.net/1.4/launch?next=5', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
     data = JSON.parse(request.responseText);
     console.log(data.launches)
     var countDownDate = new Date(data.launches[0].net).getTime();

     var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="count"
  document.getElementById("Count").innerHTML = "Countdown to Launch " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Count").innerHTML = "Launch";
  }
}, 1000);
  } else {
    // We reached our target server, but it returned an error

  }
  function list(){
  var li = document.getElementsByTagName("li");
  
   for(var i = 0; i < li.length; i++){
     var launches = data.launches[i]
    if (launches != undefined){
      li[i].innerHTML=launches.name + launches.windowstart
    }
    else {
      li[i].innerHTML = ""
    }
   }

  }
list()
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

function SecondButton(){
// var request = new XMLHttpRequest();
request.open("GET", "https://launchlibrary.net/1.4/launch?next=5&name=falcon"); 
request.send();
document.getElementById("secHead").innerHTML =  ' Next Launch: Wed, November 14 2018';
 }


function ThirdButton(){
// var request = new XMLHttpRequest();
request.open("GET", "https://launchlibrary.net/1.4/launch?next=5&name=ariane");
request.send(); 
 document.getElementById("secHead").innerHTML =  ' Next Launch: Thurs, November 15 2018';

 function FourthButton(){
   request.open("GET", "https://launchlibrary.net/1.4/launch?next=5&name=launcherone");
request.send(); 
 document.getElementById("secHead").innerHTML =  ' Next Launch: Thurs, November 15 2018';

 }
}




