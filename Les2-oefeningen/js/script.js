(function () {
    'use strict';

    let apiAdr = 'http://localhost/wm/Les2-oefeningen/api.php?';
    let contents = document.getElementById('Contents');
    let options = {
        method: 'POST', // GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    let getApiProducten = function () {
        let url = apiAdr + 'm=getProducten';

        options.body = JSON.stringify({
            format: 'json',
        });

        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (responseList) {
                let list = responseList.data;

                if (list.length > 0) {
                    // er zit minstens 1 item in list, we geven dit ook onmiddelijk weer
                    let tLijst = '<span class=\'rij kOdd\'><span>pr_id</span><span>pr_naam</span><span>pr_prijs</span><span>pr_categorie</span></span>';
                    for (let i = 0; i < list.length; i++) {
                        let cat_id = list[i].pr_ct_id;
                        let cat_name = getApiProductCategory(cat_id);
                        tLijst += '<span class=\'rij\'><span>' + list[i].pr_id + '</span><span>' + list[i].pr_naam + '</span><span>' + list[i].pr_prijs + '</span><span>' + list[i].pr_ct_id + '</span></span>';
                    }
                    tLijst += '<br>';

                    showContents(tLijst);
                } else {
                    showContents('Could not receive content');
                }
            })
            .catch(function (errMsg) {
                showContents('Er is een fout opgetreden: ' + errMsg);
            });
    };

    let getApiProductCategory = function (id) {
        let url = apiAdr + 'getCategorie';

        options.body = JSON.stringify({
            format: 'json',
            ct_id: id
        });

        fetch(url, options)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                return data;
            });
    };

    let addApiProducts = function () {
        let url = apiAdr + 'addProducten';

        options.body = JSON.stringify({
            format: 'json',
            naam: document.getElementById('Productnaam').value,
            prijs: document.getElementById('Prijs').value,
            categorie: document.getElementById('Categorie').value
        });

        fetch(url, options);
    };

    let showContents = function (content) {
        contents.innerHTML = content;
    };

    document.getElementById('btnGetProducten').addEventListener('click', function () {
        getApiProducten();
    });
    document.getElementById('btnAdd').addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        addApiProducts();
        getApiProducten();
    });
})();