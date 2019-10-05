(function () {
    'use strict';
    /*jslint browser: true*/
    /*jslint devel: true*/
    let apiAddress = 'http://localhost/wm/les2/api.php?';
    let alertEl = document.getElementById('alert');
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

    function getApiGebruiker() {
        // een ONVEILIGE manier om gebruikersgegevens te testen

        let url = apiAddress + 'm=login';
        // onze php api verwacht een paar parameters
        // we voegen deze toe aan de body van de opties

        // body data type must match "Content-Type" header
        opties.body = JSON.stringify({
            name: document.getElementById('login').value,
            password: document.getElementById('pwd').value,
            format: 'json'
        });

        // test de api
        fetch(url, opties)
            .then(function (response) {
                return response.json();
            })
            .then(function (responseData) {
                // test status van de response
                if (responseData.status < 200 || responseData.status > 299) {
                    // login faalde, boodschap weergeven
                    // Hier kan je ook een groter onderscheid maken tussen de verschillende vormen van login falen.
                    alerter('Login mislukt : deze naam/paswoord combinatie bestaat niet');
                    // return, zodat de rest van de fetch niet verder uitgevoerd wordt
                    return;
                }

                // de verwerking van de data
                let list = responseData.data;

                if (Object.keys(list).length > 0) {
                    // list bevat minstens 1 property met waarde
                    list.ID = parseInt(list.ID);
                    // alles wat via json komt, is standaard een string of een object.
                    // hier is het omzetten naar een int wel niet nodig, omdat we er niet met gaan rekenen
                    alerter('Gebruikersgevens ok : ID = ' + list.ID);
                } else {
                    alerter('Login failed : this login/password combination does not exist');
                }

            })
            .catch(function (error) {
                // verwerk de fout
                alertEl.innerHTML = 'fout : ' + error;
            });
    }

    function getApiProducten() {
        // de producten van de server opvragen en weergeven dmv de alerter functie
        let url = apiAddress + 'm=getProducten';

        // body data type must match "Content-Type" header
        opties.body = JSON.stringify({
            format: 'json'
            //, user : "test" // als je de authentication in de api op true zet, heb je dit hier wel nodig
            //, password : "test" // als je de authentication in de api op true zet, heb je dit hier wel nodig
        });

        // test de api
        fetch(url, opties)
            .then(function (response) {
                return response.json();
            })
            .then(function (responseData) {
                // de verwerking van de data
                let list = responseData.data;

                if (list.length > 0) {
                    // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
                    let tLijst = '<span class=\'rij kOdd\'><span>ID</span><span>Omschrijving</span><span>Prijs</span></span>';
                    for (let i = 0; i < list.length; i++) {
                        tLijst += '<span class=\'rij\'><span>' + list[i].ID + '</span><span>' + list[i].omschrijving + '</span><span>' + list[i].prijs + '</span></span>';
                    }
                    tLijst += '<br>';

                    alerter(tLijst);
                } else {
                    alerter('Servertijd kon niet opgevraagd worden');
                }

            })
            .catch(function (error) {
                // verwerk de fout
                alertEl.innerHTML = 'fout : ' + error;
            });
    }

    function getApiTijd() {
        // de tijd van de server opvragen en weergeven dmv de alerter functie
        let url = apiAddress + 'm=getTime';

        // body data type must match "Content-Type" header
        opties.body = JSON.stringify({
            format: 'json'
            //, user : "test" // als je de authentication in de api op true zet, heb je dit hier wel nodig
            //, password : "test" // als je de authentication in de api op true zet, heb je dit hier wel nodig
        });

        // test de api
        fetch(url, opties)
            .then(function (response) {
                return response.json();
            })
            .then(function (responseData) {
                // de verwerking van de data
                let list = responseData.data;

                if (Object.keys(list).length > 0) {
                    // er zit slechts 1 item in de lijst, we geven dit ook onmiddelijk weer
                    alerter('Servertijd : ' + list.servertime);
                } else {
                    alerter('Servertijd kon niet opgevraagd worden');
                }


            })
            .catch(function (error) {
                // verwerk de fout
                alerter('<br>API Fout. Probeer later nog eens.<br>(' + error + ')');
            });

        /*
		$.ajax({
			type: "POST",
			url: apiAddress + "m=getTime",
			crossDomain: true,
			data: data,
			withCredentials: false,
			success: function(responseData, textStatus, jqXHR) {
				var list = responseData.data;
				console.log("resultlist :" + list + " length:" + list.length);

				if (Object.keys(list).length > 0) {
					// er zit slechts 1 item in de lijst, we geven dit ook onmiddelijk weer
					console.log("Servertijd :  " + list.servertime);
					alerter("Servertijd : " + list.servertime);


				} else {
					console.log("Servertime retrieval failed");
					alerter("Servertijd kon niet opgevraagd worden");
				}

			},
			error: function(responseData, textStatus, errorThrown) {
				console.log("API Failure " + errorThrown);
				alerter("<br>API Fout. Probeer later nog eens.<br>(" + errorThrown + ")");
			}
    });
    */
    }


    // EventListeners
    document.getElementById('btnTestLogin').addEventListener('click', function () {
        getApiGebruiker();
    });

    document.getElementById('btnGetTijd').addEventListener('click', function () {
        getApiTijd();
    });

    document.getElementById('btnGetProducten').addEventListener('click', function () {
        getApiProducten();
    });

    // helper functies
    function alerter(message) {
        alertEl.innerHTML = message;
    }
})();