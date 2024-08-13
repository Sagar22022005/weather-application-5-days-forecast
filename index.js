const apikey="f00326d41eafae956b42a9da6a997de5";
const apiurl="https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const weathericon=document.querySelector(".weather-icon");
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
document.addEventListener("keydown",function(event){
if(event.key=="Enter")
{
    checkweather(searchBox.value);
}
})

async function checkweather(city) {
    const response= await fetch(apiurl+ city +`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.city.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.list[9].main.temp)+'°C';
    document.querySelector(".temperature1").innerHTML=Math.round(data.list[9].main.temp)+'°C';

    document.querySelector(".humidity").innerHTML=data.list[9].main.humidity +"%";
    document.querySelector(".wind").innerHTML=Math.round(data.list[9].wind.speed) +"km/h"; 
    document.querySelector(".b1").innerHTML=  "Temperature : " +Math.round(data.list[0].main.temp)+'°C';
    document.querySelector(".c1").innerHTML="Humidity: "+data.list[0].main.humidity +"%";
    document.querySelector(".d1").innerHTML="Wind speed : "+ Math.round(data.list[0].wind.speed) +"km/h";
    document.querySelector(".b2").innerHTML=  "Temperature : "+Math.round(data.list[1].main.temp)+'°C';
    document.querySelector(".c2").innerHTML="Humidity : "+data.list[1].main.humidity +"%";
    document.querySelector(".d2").innerHTML="Wind speed : "+Math.round(data.list[1].wind.speed) +"km/h"; 
    document.querySelector(".b3").innerHTML=  "Temperature : "+Math.round(data.list[9].main.temp)+'°C';
    document.querySelector(".c3").innerHTML="Humidity : "+data.list[9].main.humidity +"%";
    document.querySelector(".d3").innerHTML="Wind speed : "+Math.round(data.list[9].wind.speed) +"km/h"; 
    document.querySelector(".b4").innerHTML=  "Temperature : "+Math.round(data.list[17].main.temp)+'°C';
    document.querySelector(".c4").innerHTML="Humidity : "+data.list[17].main.humidity +"%";
    document.querySelector(".d4").innerHTML="Wind speed : "+Math.round(data.list[17].wind.speed) +"km/h"; 
    document.querySelector(".b5").innerHTML=  "Temperature : "+Math.round(data.list[25].main.temp)+'°C';
    document.querySelector(".c5").innerHTML="Humidity : "+ data.list[25].main.humidity +"%";
    document.querySelector(".d5").innerHTML="Wind speed: "+ Math.round(data.list[25].wind.speed) +"km/h";
    document.querySelector(".b6").innerHTML=  "Temperature : "+Math.round(data.list[33].main.temp)+'°C';
    document.querySelector(".c6").innerHTML="Humidity : "+ data.list[33].main.humidity +"%";
    document.querySelector(".d6").innerHTML="Wind speed: "+ Math.round(data.list[33].wind.speed) +"km/h"; 
    if(data.list[0].weather[0].main=="Rain"){
        weathericon.src="https://www.freepnglogos.com/uploads/rain-png/transparent-download-green-cloud-with-rain-clipart-png-23.png";
    }
    else if(data.list[0].weather[0].main=="Clouds"){
        weathericon.src="https://clipartcraft.com/images/cloud-clipart-blue-1.png";
    }
    else if(data.list[0].weather[0].main=="Clear"){
        weathericon.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png";
    }
    else if(data.list[0].weather[0].main=="Drizzle"){
        weathericon.src="https://cdn-icons-png.flaticon.com/512/8784/8784141.png";
    }
    else if(data.list[0].weather[0].main=="Mist"){
        weathericon.src="https://cdn-icons-png.flaticon.com/512/10630/10630000.png";
    }
}
searchBtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value);


})
