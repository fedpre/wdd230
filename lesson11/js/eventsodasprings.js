// Create Town Cards in the Homepage

const infoURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(infoURL)
    .then((response) => {
        return response.json();
    })
    .then((jsonObj) => {
        console.table(jsonObj);
        const towns = jsonObj["towns"];
        towns.forEach((town) => {
            if (town.name == 'Soda Springs') {
  
                // Create Event Cards //
                let sectionEvent = document.createElement('section');
                let h4Event = document.createElement('h4');
                let divContCardEvent = document.createElement('div');
    
                let events = town.events;
                let allEvents = document.createElement('div');
                let buttonJoin = document.createElement('button');
                
                sectionEvent.setAttribute('class', 'card-1');
                sectionEvent.setAttribute('id', 'homepage-box');
                divContCardEvent.setAttribute('class', 'container-2 card-1-2 event-flex');
                
                h4Event.textContent = `${town.name} Events`;

                events.forEach(event => {
                    let eventPar = document.createElement('p');
                    eventPar.textContent = event;
                    allEvents.append(eventPar);
                })

                allEvents.setAttribute('class', 'events-name');
                buttonJoin.textContent = 'Join Us'
                buttonJoin.setAttribute('class', 'btn-events');
                divContCardEvent.append(allEvents, buttonJoin);
                sectionEvent.append(h4Event, divContCardEvent);
                document.querySelector('.events-articles-container').append(sectionEvent)

            }
        });
    })