document.getElementById('city').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
async function getWeather() {
    const city = document.getElementById('city').value.trim();
    if (city === "") {
        document.getElementById('weather-info').innerHTML = `<p style="color:red;">Please enter a city name.</p>`;
        return;
    }
    const apiKey = '21b4d10a4717955d13f9b26d3a47b6a2'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
``
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        
        document.getElementById('weather-info').innerHTML = `
            <p><strong>🌍 City:</strong> ${data.name}, ${data.sys.country}</p>
            <p><strong>🌡 Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>📉 Min Temp:</strong> ${data.main.temp_min}°C</p>
            <p><strong>📈 Max Temp:</strong> ${data.main.temp_max}°C</p>
            <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>🌬 Wind Speed:</strong> ${data.wind.speed} m/s</p>
            <p><strong>☁ Weather:</strong> ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById('weather-info').innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}
