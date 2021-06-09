//var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');

var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

function abc(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=vellore&appid=73d5aef80da482fc05e730e7ac62b7b6')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'] - 273.2;
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+Math.round(tempValue)+"°C";
  input.value ="";

})
}
abc()