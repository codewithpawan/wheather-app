// Created by pawan kumavat
function submition(){
var input = document.getElementById("enter").value;
    if(input === ""){
        toast.innerHTML = "Input Field Can't Be Blank !";
toast.classList.add("active");
        setTimeout(function () { toast.className = toast.classList.remove("active"); }, 2000);
    } else {

 writeDate()
 getData(input);
    }
}

function cancel(){
    document.getElementById('enter').value = "";
}

function writeDate(){
    date=new Date()
   var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]   
   
    document.getElementById("date").innerHTML=days[date.getDay()]+" , "+date.getDate()+" "+months[date.getMonth()]+" "+date.getFullYear()
}

// Created by SHIVAM
/*
function getData() {
            const query = document.getElementById("myText").value;

            const proxy = 'https://cors-anywhere.herokuapp.com/';

            var api = `${proxy}http://ip-api.com/json/${query}`

            fetch(api)
                .then(function(resp) { 
                    return resp.json() 
                })
                .then(function(data) {
                     locationP.textContent = "Location : " + data.country;
                });
                
*/                
function getData(cityID) {  
var unit = document.getElementById("select").value;
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=8a58c838695dcc48f720934ab21f05f3&units=metric')  
    .then(function(resp) { 
        return resp.json() 
    }) // Convert data to json
    .then(function(data) {
      getMain(data);
    })
    .catch(function() {
      // catch any errors
toast.innerHTML = "Invalid City Name !";
toast.classList.add("active");
        setTimeout(function () { toast.className = toast.classList.remove("active");}, 2000);
        document.getElementById('card-prompt').classList.remove('hide');
    document.getElementById('enter').value = ""; document.getElementById('maincard').classList.add('hide');
    });
  }
  
  function getMain(ab){
   var unit = document.getElementById("select").value; document.getElementById('place').innerHTML = ab.name;
   
           document.getElementById('card-prompt').classList.add('hide'); document.getElementById('maincard').classList.remove('hide');
    
    /*if(unit === "Standard"){
        document.getElementById("temperature").innerHTML = ab.main.temp + " °K";
    }*/
    
    if(unit === "Fahrenheit"){
        document.getElementById("temperature").innerHTML = ((ab.main.temp) * 1.8 + 32).toFixed(2) + " F";
    } else if(unit === "Degree Celcius"){
        document.getElementById("temperature").innerHTML = (ab.main.temp).toFixed(2) + " °C";
    } else {
        
    }
    document.getElementById('climate').innerHTML = "<br>"+ab.weather[0].description;
  }

function ask(){
    
    document.getElementById('card-prompt').classList.remove('hide'); document.getElementById('maincard').classList.add('hide');
    document.getElementById("enter").value = "";
        
}

function help(){
    document.getElementById("help-card").classList.remove("hide")
document.getElementById('card-prompt').classList.add('hide');
  
    
}
function closeHelp(){
    document.getElementById("help-card").classList.add("hide")
document.getElementById('card-prompt').classList.remove('hide')
}

/*JS For Cloud Loader*/
setInterval(()=>{ document.getElementById("l-w").style.animation="loader-fade .3s ease-out";
   setInterval(()=>{
       document.getElementById("l-w").style.display="none";
   },290);
   
},3000)
/*JS For Cloud Loader End*/


function alert(){
     setTimeout(function () {
swal({
  title: "🌞☁️ Weather  app [ Curious Coders ] ❄🌧",
  text: "This is a Weather App By Curious Coders. Hope you like it. Please make sure that you haven't given any space after City or State name. Tap on question mark icon for Help.",
  icon: "success",
  button: "Continue",
  closeOnEsc: false,
  closeOnClickOutside: false,
})
},2500)
}  
