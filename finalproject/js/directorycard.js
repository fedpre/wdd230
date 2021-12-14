// Load json file
fetch("directory.json")
.then(res => { return res.json()})
.then(jsonObj => {
    const inputVal = document.querySelector('#directory-sections').value;
    if (inputVal == 'all') {
        for (let category in jsonObj) { 
            for ( let business in jsonObj[category]) {
                createCard (
                    jsonObj[category][business].name,
                    jsonObj[category][business].logo,
                    jsonObj[category][business].email,
                    jsonObj[category][business].phone,
                    jsonObj[category][business].website,
                )
            }
        }
    }
    
    const createList = () => {
        const inputVal = document.querySelector('#directory-sections').value;
        document.querySelector('.directory-cards-wrapper').innerHTML = ''

        for (let category in jsonObj) {
            if (inputVal == category) {
                for ( let business in jsonObj[category]) {
                    createCard (
                        jsonObj[category][business].name,
                        jsonObj[category][business].logo,
                        jsonObj[category][business].email,
                        jsonObj[category][business].phone,
                        jsonObj[category][business].website,
                    )
                }
            } else if (inputVal == 'all') {
                document.querySelector('.directory-cards-wrapper').innerHTML = ''
                for (let category in jsonObj) { 
                    for ( let business in jsonObj[category]) {
                        createCard (
                            jsonObj[category][business].name,
                            jsonObj[category][business].logo,
                            jsonObj[category][business].email,
                            jsonObj[category][business].phone,
                            jsonObj[category][business].website,
                        )
                    }
                }
            }
        }
    }

    // Add event listener
    document.querySelector('#directory-sections').addEventListener('change', createList)
});

// Create each card
const createCard = ( name, logoURL, email, phone, link ) => {
    const divWrapper = document.createElement('div');
    const logoImg = document.createElement('img');
    const nameH3 = document.createElement('h3');
    const emailSpan = document.createElement('span');
    const phoneSpan = document.createElement('span');
    const linkBtn = document.createElement('button');
    
    divWrapper.setAttribute('class', 'directory-card flex-card card');
    
    logoImg.setAttribute('src', `./images/${logoURL}`);
    logoImg.setAttribute('alt', `${name} logo`);

    nameH3.setAttribute('class', 'businessName');
    nameH3.textContent = name;

    emailSpan.setAttribute('class', 'card-email')
    emailSpan.textContent = email;

    phoneSpan.setAttribute('class', 'card-phone')
    phoneSpan.textContent = phone;

    linkBtn.setAttribute('class', 'btn btn-mb');
    linkBtn.setAttribute('onClick', `window.location.href='${link}'`)
    linkBtn.textContent = 'Visit The Website';

    divWrapper.append(logoImg, nameH3, emailSpan, phoneSpan, linkBtn)

    document.querySelector('.directory-cards-wrapper').append(divWrapper);
}

