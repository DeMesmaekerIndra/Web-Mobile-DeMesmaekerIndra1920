<?php
echo "<h1>Test oefening</h1>";
?>
<style>
    .rij{
        clear:both;
        float:left;
        margin-left:0.25em;
        margin-right:0.25em;
    }
    .kolom1, .kolom3{
        display:inline-block;
        width: 3em;
        background-color:lightgrey;
    }
    .kolom2{
        display:inline-block;
        width: 15em;
        background-color:darkgrey;
    }

</style>
<?php

// een verbinding leggen met de databank
$servername = "localhost";
$username = "root";// dangerous
$password = "";// dangerous
$dbname = "test";// standaard test databank

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());

// die() served de parameter die je aan die() meegeeft,
// en zorgt dat de verdere verwerking van het php script stopt.
// je gebruikt dit wanneer er een probleem is in de code
// die verhindert dat de rest van de code correct uitgevoerd
// kan worden. In dit geval geven we de mysqli foutcode mee wanneer
// er geen connectie met de databank gemaakt kan worden.
// Test dit door de in je Xampp Control panel MySQL uit te schakelen
// en de pagina opnieuw te laden.


function fetchData($sql, $conn){
    // $sql is een string met een SQL query
    // $conn is het object met de verbinding naar de databank
    $return = array();
    if (!$conn) {
        die("Geen databank verbinding");
    } else {
        $result = $conn -> query($sql); // voer de query uit en stop het resultaat in $result
        while ($row = $result -> fetch_assoc()) {
            // loop door alle resultaatrijen en plaats die in de array $return
            // die als returnwaarde wordt teruggegeven.
            // Iedere nieuwe $row wordt op de laatste positie + 1 gestopt
            $return[count($return)] = $row;
        }
    }
    return $return; // return de array
}
$resultaat = fetchData("SELECT * from producten" , $conn);

for($i = 0 ; $i < count($resultaat) ; $i++){
    // loop door ieder item van de $resultaat array, haal de gewenste info er uit en toon
    // deze in de vorm van html. In dit geval ingedeeld met spans.
    echo "<span class='rij'><span class='kolom1'>". $resultaat[$i]["pr_id"] ."</span><span class='kolom2'>".$resultaat[$i]["pr_naam"]."</span><span class='kolom3'>".$resultaat[$i]["pr_prijs"]."</span><span class='kolom3'>".$resultaat[$i]["pr_ct_id"]."</span></span>";
}


?>