import json

directory = {
    "restaurants": {
        "la_locanda": {
            "logo": "logo-locanda.png",
            "name": "La Locanda Restaurant",
            "email": "info@lalocanda.com",
            "phone": "+390652373177",
            "website": "https://www.lalocanda.com/"
        },
        "er_macellaio": {
            "logo": "logo-macellaio.png",
            "name": "Er Macellaio",
            "email": "info@ermacellaio.it",
            "phone": "+390652831571",
            "website": "https://www.ermacellaio.com/"
        },
    },
    "dental": {
        "studio_falchetti": {
            "logo": "logo-falchetti.png",
            "name": "Studio Dentistico Falchetti",
            "email": "info@studiofalchetti.it",
            "phone": "+390677201233",
            "website": "https://www.dentistasangiovanniroma.it/"
        },
        "studio_idea": {
            "logo": "logo-idea.png",
            "name": "Studio Dentistico iDea EUR",
            "email": "dentistaeur@gmail.com",
            "phone": "+390652831020",
            "website": "https://www.dentistaeur.it/"
        },
    },
    "banking": {
        "isp_eur": {
            "logo": "logo-intesa.png",
            "name": "Banca Intesa San Paolo EUR",
            "email": "info@ispeur.it",
            "phone": "+390654228511",
            "website": "https://www.intesasanpaolo.com/"
        },
        "unicredit": {
            "logo": "logo-unicredit.png",
            "name": "Banca Unicredit EUR",
            "email": "contact@unicrediteur.it",
            "phone": "+390687825102",
            "website": "https://www.unicredit.it/it/privati.html"
        },
    },
    "automotive": {
        "autoomega": {
            "logo": "logo-omega.png",
            "name": "Autoomega Caroozzeria",
            "email": "automega@tiscali.it",
            "phone": "+39068862125",
            "website": "https://www.carrozzeriaautomega.it/"
        },
        "brandimarte": {
            "logo": "logo-brandimarte.png",
            "name": "Officina Brandimarte",
            "email": "alessandro.brandimarte@fastwebnet.it",
            "phone": "+390670451613",
            "website": "https://www.autofficinabrandimarte.it/"
        },
    },
}

json_obj = json.dumps(directory, indent=4)

with open("directory.json", "w") as outfile:
    outfile.write(json_obj)