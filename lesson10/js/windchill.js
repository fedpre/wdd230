// const windSpeed = parseFloat(document.querySelector('.wind-speed').textContent);
// const temperature = parseFloat(document.querySelector('.temperature').textContent);
// const windChill = parseFloat(document.querySelector('.wind-chill').textContent);


const calcWindChill = (temperature, windSpeed) => {
    let windChillVal;

    if (temperature <= 50 && windSpeed > 3) {
        windChillVal = 35.74 + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * (temperature * (windSpeed ** 0.16)));
    
        windChillVal = Math.round(windChillVal * 100) / 100;
    
        return windChillVal;
    } else {
        windChillVal = 'N/A';
        return windChillVal;
    }
}


