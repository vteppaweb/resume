window.addEventListener('load',()=>{
    
 /*    let long;
    let lat;
    let temperatureDescription = document.querySelector('.description');
    let temperatureDegree = document.querySelector('.temperature');
    let locationtimezone = document.querySelector('.timezone');
    let windSpeed = document.querySelector('.wind');
    let humidity1 = document.querySelector('.humidity');
    let iconImage = document.querySelector('.icon-image');
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const api = `https://api.weatherapi.com/v1/forecast.json?key=db58a49810d14220abb182012213004&q=${lat},${long}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
               const {temp_f, wind_mph, humidity, condition} = data.current;
               const {tz_id, name } = data.location;
               // Set DOM Elements from the API:
               const temp = temp_f.toString();
               const temperatureNormal = temp.substring(2,3);
               if(temperatureNormal === "."){
                temperatureDegree.textContent = temp.substring(0,2);
               }
               else{
                temperatureDegree.textContent = temp_f;
               }   
               temperatureDescription.textContent = condition.text;
               locationtimezone.textContent = name;
               windSpeed.textContent = wind_mph + "mph";
               humidity1.textContent = humidity + "%"; 
               iconImage.src = condition.icon;    
               console.log(data);
            });
                    
        });       
    }   */
});