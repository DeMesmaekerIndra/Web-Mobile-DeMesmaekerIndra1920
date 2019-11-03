let $$ = Dom7;

let app = new Framework7({
    root: '#app', // App root element
    id: 'net.ophalvens.wmF7Cordova', // App bundle ID
    name: 'F7Cordova', // App name
    theme: 'auto', // Automatic theme detection
    // App root data
    data: function () {
        return {
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },
            // Demo products for Catalog section
            products: [{
                id: '1',
                title: 'Apple iPhone 8',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
            },
            {
                id: '2',
                title: 'Apple iPhone 8 Plus',
                description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
            },
            {
                id: '3',
                title: 'Apple iPhone X',
                description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
            },
            ]
        };
    },
    // App root methods
    methods: {
        helloWorld: function () {
            app.dialog.alert('Hello World!');
        },
    },
    // App routes
    routes: routes,


    // Input settings
    input: {
        scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
        scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
    },
    // Cordova Statusbar settings
    statusbar: {
        iosOverlaysWebView: true,
        androidOverlaysWebView: false,
    },
    on: {
        init: function () {
            let f7 = this;
            if (f7.device.cordova) {
                // Init cordova APIs (see cordova-app.js)
                cordovaApp.init(f7);
            }
        },
        pageInit: function (page) {
            // andere methode om functies aan een knop te hangen
            if (page.route.name === 'gegevens') {
                getList();
                $$('#btnVoegToe').on('click', function () {
                    voegToe();
                });
            }

        }
    },
});

function showLocation(position) {
    if (app.view.current.router.url === '/locatie/') {
        // success functie

        let lat1 = position.coords.latitude;
        let lon1 = position.coords.longitude;
        let latBrussel = 50.8504500;
        let lonBrussel = 4.3487800;

        //Zie haversine.js
        $$('#locatieResultaat').html(
            `<p>Latitude: ${position.coords.latitude}</p>
            <p>Longitude: ${position.coords.longitude}</p>
            <p>Accuracy: ${position.coords.accuracy}m.</p>
            <p>Timestamp: ${new Date(position.timestamp)}</p>
            <p>Distance To Brussels: ${getDist(lat1, lon1, latBrussel, lonBrussel)}</p>`);
    }
}

function positionError(error) {
    console.log('Error occurred. Error code: ' + error.code);
    // error.code can be:
    //   0: unknown error
    //   1: permission denied
    //   2: position unavailable (error response from location provider)
    //   3: timed out
    switch (error.code) {
    case 0:
        // unknown error
        app.dialog.alert('Onbekend probleem bij het bepalen van je positie. Zorg er voor dat de positiebepaling van je toestel actief is.', 'Positie probleem');
        break;
    case 1:
        // permission denied
        app.dialog.alert('Het spijt me, maar ik ga je moeten blijven pesten als je geen toestemming geeft om je positie te zien. Als je wilt, kan je de pagina herladen en eventueel de geschiedenis van je browser wissen. Het laatste uur is meer dan voldoende. <b>iPhone</b> : zorg er voor dat je locatie toestemming in het algemeen EN locatie toestemming aan Safari geeft.', 'Positie toelating probleem');
        break;
    case 2:
        // position unavailable (error response from location provider)
        app.dialog.alert('Je positie is niet beschikbaar. Zorg er voor dat de positiebepaling van je toestel actief is.', 'Positie niet beschikbaar');
        break;
    case 3:
        // timed out
        app.dialog.alert('Het duurt te lang om je positie te vinden. Zit je in een tunnel? Of zit je nog in de school? Op een heel aantal toestellen kan de positie sneller bepaald worden als je ook je wifi aanzet.', 'Positie timeout');
        break;
    }
}

// ---------- uitbreiding voorbeeld stap-4 gegevens ---------------- //

let apiAddress = 'https://webandmobile1920.000webhostapp.com/api.php?';
let opties = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

function getList() {
    // de data opvragen van de andere server (zie les 2)

    // body data type must match "Content-Type" header
    opties.body = JSON.stringify({
        format: 'json'
    });

    // test de api
    fetch(apiAddress + 'm=GetProducten', opties)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            // de verwerking van de data
            let list = responseData.data;

            if (list.length > 0) {
                // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
                let tlines = '';
                for (let i = 0, len = list.length; i < len; i++) {
                    tlines += `<div class='row'><span class='col'>${list[i].pr_naam}</span>
                                <span class='col'>${ list[i].pr_prijs}</span>
                                <button onClick='sendAjax(${list[i].pr_id});' class='button button-fill button-raised button-small color-orange col'>Verwijder</button></div>`;
                }

                $$('#pList').html(tlines);
            } else {
                app.dialog.alert('Producten konden niet opgevraagd worden');
            }

        })
        .catch(function (error) {
            // verwerk de fout
            app.dialog.alert('fout : ' + error);
        });

    return true;
}

function sendAjax(id) {
    // fetch request opzetten om een item te verwijderen.
    // body data type must match "Content-Type" header
    opties.body = JSON.stringify({
        format: 'json',
        id: id
    });

    fetch(apiAddress + 'm=deleteProducten', opties)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            // de verwerking van de data
            app.dialog.alert('Die zien we nooit meer ... terug!', 'Item verwijderd');
            // refresh de lijst
            getList();

        })
        .catch(function (error) {
            // verwerk de fout
            app.dialog.alert('POST failed. :' + errorThrown, 'Item toegevoegd');
        });
}

function voegToe() {
    let cat = $$('input[name=categorie]:checked').val();
    // body data type must match "Content-Type" header
    opties.body = JSON.stringify({
        format: 'json',
        naam: $$('#PR_naam').val(),
        prijs: $$('#prijs').val(),
        categorie: (cat === 'fruit' ? 1 : 2)
    });

    fetch(apiAddress + 'm=addProducten', opties)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseData) {
            if (responseData.status === 'fail') {
                app.dialog.alert('Sorry, probeer nog een keer met meer data ...', responseData.error);
            } else {
                app.dialog.alert('ok', 'Product toegevoegd');
            }
            // refresh de lijst
            getList();
        })
        .catch(function (error) {
            // verwerk de fout
            app.dialog.alert('POST failed. :' + errorThrown, 'Toevoegen is niet gelukt');
        });
}