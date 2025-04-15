document.getElementById("getWeather").addEventListener("click", async function() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        document.getElementById("weather-info").innerHTML = "<p>Please enter a city name.</p>";
        return;
    }
    
    const apiKey = "e455324caffc3e52289687377d9b7c45"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        
        const data = await response.json();
        document.getElementById("weather-info").innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("weather-info").innerHTML = `<p>${error.message}</p>`;
    }
});