document.addEventListener('DOMContentLoaded', async function () {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherData = data.current;
        const timezone = data.timezone;

        const temperature = weatherData.temperature_2m;
        const windSpeed = weatherData.wind_speed_10m;
        const time = new Date().toLocaleString();

        document.getElementById('temperature').textContent = `${temperature} °C`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} km/h`;
        document.getElementById('timezone').textContent = `Timezone: ${timezone}`;
        document.getElementById('time').textContent = `Current Time: ${time}`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});