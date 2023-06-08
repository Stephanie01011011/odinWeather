

//let form = document.getElementById('weatherForm');

    function getData(){
        fetch("http://api.weatherstack.com/current?access_key=42b8d41c7809162091db1c8bc7ca52d4&query=Indiana", {mode:'cors'}).then(function(response){
    return response.json()}).then(function(response){
        DisplayWeather(response);
    })
    }

    function check(){
        
        let radio1 = document.getElementById('indiana');
        let radio2 = document.getElementById('ohio');
        let radio3 = document.getElementById('illinois');
        let radio4 = document.getElementById('tennessee');
        if(radio1.checked){
            location = "indiana";
            getData();
            //DisplayWeather(location, response);
        } else if(radio2.checked){
            location = "ohio";
            getData();
            //DisplayWeather(location, response);
        } else if(radio3.checked){
            location = "illinois";
            getData();
            //DisplayWeather(location, response);
        } else if(radio4.checked){
            location = "tennessee";
            getData();
            //DisplayWeather(location, response);
        } else {
            console.log("No button selected");
        }
    }

    function DisplayWeather(response){
        console.log(response.location.name);
        console.log(response.current.temperature);

    }

window.onload = init()
function init(){
    //this isn't working
    let checkBtn = document.getElementById('check');
    checkBtn.addEventListener = function(event){
        event.preventDefault;
        console.log("hi")
        check();
}
}
