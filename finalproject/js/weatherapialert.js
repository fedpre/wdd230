const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.895&lon=12.484&appid=5bf449ff183a3e099f210e8427e72895'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject)

        // Weather Alerts
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
    })