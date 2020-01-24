# Logboek
## Totaal aantal uren: 91u 30m

## Week 1:
* 4u les.
    * Vormen team.
    * Aanmaken van Github repository & logboek.
    * Installatie XAMPP.
    * Oefenen met phpMyAdmin

* 1/10/19 : 2u.
    * Werken aan oefening 2, foreign key toevoegen : 15m.
    * Tonen van categorie naam oef 2 : 15m.
    * PHP documenten juiste html headings & tags gegeven : 5m.
    * W3schools exercises : 25m.
    * oef 2 form invoegen producten : 1u.
    * Sources: W3Schools, form & php tutorial https://www.youtube.com/watch?v=0BoZc5oUioA

## Week 2:
* 4u les.
    * Werken met API, CORS, voorbeeldoefeningen.
    * Uitbreiding oefening week 1, server & client size toevoegen & verwijderen van producten.
    * deel 2, prepared statements.

* 5/10/19 : 3u.
    * Begrijpen van api voorbeeld code : 30m.
    * Aanpassen van voorbeeld code voor oefening & experimentatie : 1u 40m.
    * Prepared statements gebruiken in vorige oefening : 50m.

* 7/10/19 : 1u.
    * Online host uit 1ste semester opzoeken & gebruiken voor testen.
    * Leren werken met DB tool & phpMyAdmin op hosting site.
    * test DB aanmaken, tabellen 'producten', 'categorie' opnieuw toevoegen.
    * Api script aanpassen aanpassen ivm met auto gegenereerde naam van de DB en user. Toevoegen van passwoord.
    * testdata toevoegen.
    * https://webandmobile1920.000webhostapp.com (Oefening les 2, kan veranderen).

## Week 3:
* 4u les.
    * Leren werken met Cordova.
    * Installatie Android Studio
    * Installatie Cordova.
    * Uit testen hello world app

* 9/10/19 1u:
    * hybdride app data doen ophalen & doorsturen aan api op https://webandmobile1920.000webhostapp.com (code van oefening les 2).
    * Content security policy

## Week 4:
* 4u les.
   * Kennismaking Framework7
   * installatie & voorbeeldoefeningen

## Week 5:
* 4u les.
    * Werken aan project
    * ERD & fysiek model DB opstellen
    * Concept verder uitwerken

## Herfsvakantie:
* 3/11/19 : 2u.
    * Afstand tussen Brussel & huidige locatie bepalen : 1u.
	* Code aanpassen om producten van eigen API op te vragen : 20m.
	* Code aanpassen om producten toe te voegen via eigen API : 20m.
	* Code (API & Js) aanpassen om product te verwijderen : 20m.

* 4/11/19 : 2u.
	* Iconen veranderen (Gebruikte iconen: http://icon-works.com/index.html) : 30m
	* Gebruik maken van cordova-plugin-camera : 1u 30m
		* Note: Plugins niet toevoegen in root van f7 project maar in "f7Project>Cordova" <- Hiermee veel tijd verspilt

* 5/11/19 : 1u30m
	* Gebruik maken van cordova-barcode-generator in F7 oefenproject
	    * Installatie
		    * Note: Problemen ondervonden met required cordova-android version voor plugins. (Installed: 8.1.0. Barcode-plugin req.:<=6.3.0)
	    * Barcode genereren naar (https://webandmobile1920.000webhostapp.com)
	    * Barcode kunnen lezen & tekst weergeven

## Week 6:
*	4u les.
	* Kennis maken met native apps & android studio
	* Hello world app
	* Start udacity course 1 & 2

## Week 7:
* 11/11/19 : 30m
	* Databank maken in phpMyAdmin + export van sql

## Week 8:
* 19/11/19 : 5u
	* Werken aan backend van project
		* Verder verfijnen van de databank (missende relaties, nulllables, default values, ...)
		* Beginnen met opmaken van API
			* Door de oefeningen gaan kijken naar de juiste manier van werken
			* ophalen van alle/specifieke gegevens uit gewenste tabellen
		* API hosten op een domein (https://webandmobilefme.000webhostapp.com)
			* Note: We proberen een eigen host server te gebruiken, de hosting op 000webhost is momenteel enkel voor het testen van de API
		* HTML index pagina & script gemaakt om gemakkelijk de api te kunnen testen
		* FileZilla geïnstalleerd als FTP client om gemakkelijk de gehoste bestanden te bewerken

* 4u les.
	* Verder werken aan API project
		* Ophalen gegevens van alle tabellen
		* toevoegen van record voor 2 tabellen
	* Verbeteringen/suggesties door docent
		* Note: API zal een redesign nodig hebben

* 20/11/19 : 4u
	* Overhaul van API volgens aanbevelingen/suggesties
		* Toevoegen van HTTP responses
		* Aangepaste fout berichten, status, code vanuit API terugsturen
		* Client moet niet langer tabel doorsturen
		* Heb Api.php opgesplitst in Api.php -> functions.php -> dbConnection.php -> retrieveData.php -> insertData.php
		* Mogelijk om een hele tabel op te vragen of een enkele record op basis van de primaire sleutel

* 22/11/19 : 2u30m
	* API project
		* Array api_response_codes in $GLOBAL array gezet zodat deze ook in functies aangesproken kan worden
		* Functie toegevoegd aan functies.php 'getVariableFromPostVars'. Kan aangeroepen worden om na te kijken of verplichte values aanwezig zijn in $postvars. Zo niet geeft het een fout code terug. Dit wordt gedaan om repetitieve code voor iedere verplichte variabel te verminderen.
		* Toevoegen van specifiekere Messages voor api_response_codes

* 24/11/19 : 6u
	* Werken aan hybride app
		* installatie van ionic framework
		* testapplicatie
		* werkende navigatie, nieuwe icons
		* proberen gebruik te maken van cards
		* aanspreken van API
			* NOTE: app starte op vanuit 'localhost' in plaats van 'file://...' Andere versie van ionic webview plugin moeten installeren.
		* data binding ng-repeat voor tasks.
		* Kleine aanpassingen API

## Week 9:
* 25/11/19 : 3u
	* Werken aan hybride app
		* leren werken met modals in ionic
		* login modal maken
		* functionaliteit toevoegen aan de modal (nakijken of gebruiker bestaat, sluiten van bij cancelling)

* 5u les
	* Aanpassen van Databank
	* Categories & tasks binnenladen
	* implementeren van het doorklikken op categories & sub categories om zo bij taken te komen

* 27/11/19 : 5u
	* Layout/design aantrekkelijker gemaakt voor de tasks tabel
	* Opzoeken van de ondersteunde ionic HTML elementen voor ionic v1.
	* Niet ondersteunde elementen, tags & CSS aangepast aan de correcte manier van werken
	* Overhaul van de interne werking
		* Gebruik maken van de factory die angularJS aanbied om van gecachte data gemakkelijk bepaalde gegevens op te halen
		* Werken met es version 8, async functions & wait

## Week 10:
* 4u les
	* API aanpassen voor inserts & updates
	
## Week 11:
* 4u les 
	* login serverside doen gebeuren
	* basic API documentatie schrijven voor groep
	* aanpassen van taken mogelijk maken

* 15/12/19 : 3u 
	* API bugfixes
	* Interne werking veranderen
		* Factories & controllers aanpassen
	
* 16/12/19 : 4u
	* Home screen functionaliteit geven (recente taken tonen)
		* HTML opmaak geven voor recente taken
		* State aanmaken voor het tonen van detail informatie (hergebruik van taskDescription.html template & taskDescription Controller)
		* recente taken vanuit home screen kunnen editeren via modal (hergebruik modalTaskEdit.html template)
		* TaskFactory met functie uitbreiden die recente, on-going tasks weer te geven

## Week voor examen:
* 24/01/20 : 3u
	* Homescreen & login modal
		* Ng-if statement van divs weggehaald en op H1's gezet. (Originele manier was niet echt logisch...)
		* Inplaats van een aparte list voor assessments te gebruiken en dan een ng-if om de ID te checken tegen de task id gaat er nu per task gewoon de laatste assessment toegevoegd worden
		* Login modal gaat gebruik maken van de Ng-class attribuut om via condities de login button disabled/enabled te zetten. Origineel ging dit door in de controller events te gebruiken en vanuit code de classlist aan te passen. (Dit ging tegen de MVVM manier van werken)
		* Er is nu een modalFactory gemaakt in services.js om repetitieve code om het aanmaken, sluiten en openen van modals op 1 enkele plaats onder te brengen