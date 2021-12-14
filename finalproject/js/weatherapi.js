const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.895&lon=12.484&appid=5bf449ff183a3e099f210e8427e72895'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)

        // Current weather
        let tempKelvin = jsObject.current.temp;
        let tempFar = Math.round(((tempKelvin - 273.15) * 9 / 5+ 32) * 100) / 100;
        document.querySelector('.current-temp').textContent = `Current Temperature: ${tempFar} °F`;
        let condDescr = jsObject.current.weather[0].description;
        document.querySelector('.current-desc').textContent = `Current Condition: ${condDescr}`;
        let humidity = jsObject.current.humidity;
        document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png'; 
        document.querySelector('.weather-icon').setAttribute('src', imagesrc);

        // Weather Alerts
        if (jsObject.alerts){
            let alerts = jsObject.alerts;
            let counter = 0;
            alerts.forEach((alert) => {
                let senderName = alert.sender_name;
                let event = alert.event;
                let div = document.createElement('div');
                let divContainer = document.createElement('div');
                let closeButton = document.createElement('div');
                let button = document.createElement('img');
                div.classList.add('alert-title');
                div.textContent = `Alert: ${event}; Sender: ${senderName}`;
                button.setAttribute('src', './images/icon-close.png');
                button.setAttribute('class', 'btn-alert');
                button.setAttribute('alt', 'red cross');
                closeButton.setAttribute('class', 'close-btn');
                closeButton.append(button);
                divContainer.setAttribute('class', 'weather-alert');
                divContainer.setAttribute('id', `alert${counter}`)
                divContainer.append(div, closeButton);
                document.querySelector('.weather-alerts').append(divContainer);
                counter += 1;
            })
            let xBtns = document.querySelectorAll('.close-btn');
            xBtns.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    // console.log(e.target.parentElement.parentElement)
                    let element = e.target.parentElement.parentElement;
                    element.setAttribute('class', 'btn-hide')
                })
            })
        }

        // Weather forecast
        const currentDate = new Date(jsObject.daily[0].dt * 1000)
        const today = currentDate.getDay();

        const days = {
            0: 'Sunday',
            1: 'Monday',
            2: 'Tuesday',
            3: 'Wednesday',
            4: 'Thursday',
            5: 'Friday',
            6: 'Saturday',
        }

        let today_char;
        let i = today + 1; 

        const allDays = document.querySelectorAll('.day-name');
        allDays.forEach((day) => {
            
            Object.keys(days).forEach((day) => {
                if (i > 6) {
                    i = 0;
                }
                if (day == i) {
                    today_char = days[i];
                }
            })
            day.textContent = today_char;
            i = i + 1;
        })

        // Add Weather Forecast - Value
        const forecastEl = document.querySelectorAll('.forc');
        const allIcon = document.querySelectorAll('.for-icon');

        let z = 0;
        jsObject.daily.forEach((obj) => {
            if (z < 4 && z > 0) {
                let currentTemp = obj.temp.day;
                let tempFar = kelToFar(currentTemp)
                // console.log(tempFar)
    
                // Add current weather forecast
                forecastEl[z - 1].textContent = `${tempFar} °F`;
    
                // Add proper icon
                let iconId = obj.weather[0].icon
                let iconPath = `https://openweathermap.org/img/w/${iconId}.png`;
                allIcon[z - 1].setAttribute('src', iconPath)
                z ++;
            } else {
                z ++;
            }
        }) 
    });

    const kelToFar = (tempKelvin) => {
        return Math.round(((tempKelvin - 273.15) * 9 / 5+ 32) * 10) / 10;
    }