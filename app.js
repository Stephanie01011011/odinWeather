//Stop form from submitting
var form = document.getElementById("weatherForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


//Call a function when btn is clicked
let checkBtn = document.getElementById('check');
checkBtn.addEventListener('click', function(){
    
    let locationState = check();
    
    fetch("http://api.weatherstack.com/current?access_key=42b8d41c7809162091db1c8bc7ca52d4&query=" + locationState, {mode:'cors'})
    .then(function(response){
        return response.json();
        
    })
        .then(function(response){
            let location = response.location.name;
            let temp = (response.current.temperature * 9/5) + 32;
            let src = response.current.weather_icons;
            DisplayWeather(location, temp, src);
        })
}) 

        
    
    

    function check(){
        
        let radio1 = document.getElementById('indianapolis');
        let radio2 = document.getElementById('phoenix');
        let radio3 = document.getElementById('houston');
        let radio4 = document.getElementById('chicago');
        if(radio1.checked){
            return "indianapolis";
            
            //DisplayWeather(location, response);
        } else if(radio2.checked){
            return "phoenix";
            
            //DisplayWeather(location, response);
        } else if(radio3.checked){
            return "houston";
            
            //DisplayWeather(location, response);
        } else if(radio4.checked){
            return "chicago";
            
            //DisplayWeather(location, response);
        } else {
            console.log("No button selected");
        }
    }

    function DisplayWeather(location, temp, src){
        //clear form
        let locationText = "";
        let temperatureText = "";
       let weatherImg = document.getElementById('weatherImg');
       weatherImg.src = "";


        //Display info in added elements
       locationText = document.getElementById('locationText');
       
       temperatureText = document.getElementById('temperatureText');
       
       locationText.innerText = location;
       temperatureText.innerText = temp + "°";
       weatherImg.src = src;
       

    }

    

