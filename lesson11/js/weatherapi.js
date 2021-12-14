const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5bf449ff183a3e099f210e8427e72895';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
        let tempKelvin = jsObject.list[0].main.temp;
        let tempFar = Math.round(((tempKelvin - 273.15) * 9 / 5+ 32) * 100) / 100;
        document.getElementById('current-temp').textContent = tempFar;
        
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation

        const descr = jsObject.list[0].weather[0].description;
        console.log(descr); // note how we reference the weather array

        document.getElementById('imagesrc').textContent = imagesrc; // informational specification only

        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method

        document.getElementById('icon').setAttribute('alt', description);


    });