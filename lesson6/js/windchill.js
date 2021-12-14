const windSpeed = parseFloat(document.querySelector('.wind-speed').textContent);
const temperature = parseFloat(document.querySelector('.temperature').textContent);
const windChill = parseFloat(document.querySelector('.wind-chill').textContent);
let windChillVal;

if (temperature <= 50 && windSpeed > 3) {
    windChillVal = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * (temperature * (windSpeed ** 0.16)));

    windChillVal = Math.round(windChillVal * 100) / 100;

    document.querySelector('.wind-chill').textContent = `${windChillVal} °F`;
} else {
    document.querySelector('.wind-chill').textContent = "N/A";
}

