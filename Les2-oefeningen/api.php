<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// een verbinding leggen met de databank
$servername = "localhost";
$username = "root"; // dangerous
$password = ""; // dangerous
$dbname = "test"; // standaard test databank

// Define API response codes and their related HTTP response
$api_response_code = array(
    0 => array('HTTP Response' => 400, 'Message' => 'Unknown Error'),
    1 => array('HTTP Response' => 200, 'Message' => 'Success'),
    2 => array('HTTP Response' => 403, 'Message' => 'HTTPS Required'),
    3 => array('HTTP Response' => 401, 'Message' => 'Authentication Required'),
    4 => array('HTTP Response' => 401, 'Message' => 'Authentication Failed'),
    5 => array('HTTP Response' => 404, 'Message' => 'Invalid Request'),
    6 => array('HTTP Response' => 400, 'Message' => 'Invalid Response Format'),
    7 => array('HTTP Response' => 400, 'Message' => 'DB problems'));

// Set default HTTP response of 'ok' or NOK in this case
$response['code'] = 0;
$response['status'] = 404;
$response['data'] = null;

// Define whether an HTTPS connection is required
$HTTPS_required = false;

// Define whether user authentication is required
$authentication_required = false; // staat nu op false. Test dit eens met true, en geef de nodige login credentials mee

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());
// de or die() kan vervangen worden door de juiste aanroep van deliver_response();
// dit wordt later gedaan toch nog gedaan op de juiste plaatsen, dus we raken niet verder dan hier.
// Dit treedt normaal enkel op wanneer dit niet nog niet juist is ingesteld.

//require_once "functies.php";

// de manier waarop we via fetch data meegaven, zorgt er voor dat
// de parameters niet in $_POST, maar in de body van de request zitten
$body = file_get_contents('php://input');
$postvars = json_decode($body, true);

// --- Step 1: Initialize variables and functions

//**
// * Deliver HTTP Response
// * @param string $format The desired HTTP response content type: [json, html, xml]
// * @param string $api_response The desired HTTP response data
// * @return void
// **/
function deliver_response($format, $api_response)
{
    // Define HTTP responses
    $http_response_code = array(200 => 'OK', 400 => 'Bad Request', 401 => 'Unauthorized', 403 => 'Forbidden', 404 => 'Not Found');

    // Set HTTP Response
    header('HTTP/1.1 ' . $api_response['status'] . ' ' . $http_response_code[$api_response['status']]);

    // Process different content types
    if (strcasecmp($format, 'json') == 0) {

        // Set HTTP Response Content Type
        header('Content-Type: application/json; charset=utf-8');

        // Format data into a JSON response
        $json_response = json_encode($api_response);

        // Deliver formatted data
        echo $json_response;

    }
    // End script process
    exit;

}

// --- productenlijst
if (strcasecmp($_GET['m'], 'getProducten') == 0) {

    //Nakijken DB connectie
    if (!$conn) {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $response['data'] = mysqli_connect_error();

    } else {
        $response['code'] = 0;
        $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
        $lQuery = "SELECT pr_id, pr_naam, pr_prijs, ct_naam
                    FROM producten
                    JOIN categories
                    ON pr_ct_id = ct_id
                    ORDER BY pr_id";
        $stmt = $conn->prepare($lQuery);
        $stmt->execute();
        $result = $stmt->get_result();
        $rows = array();
        if (!$result) {
            $response['data'] = "db error";
        } else {

            while ($row = $result->fetch_assoc()) {
                $rows[] = $row;
            }

            $response['code'] = 1;
            $response['status'] = $api_response_code[$response['code']]['HTTP Response'];
            $response['data'] = $rows;
        }
    }
}

if (strcasecmp($_GET['m'], 'addProducten') == 0) {
    if (!$conn) {
        $response['code'] = 0;
        $response['status'] = $api_response_code['code']['HTTP Response'];
        $response['data'] = mysqli_connect_error();
    } else {
        $response['code'] = 0;
        $response['status'] = $api_response_code['code']['HTTP Response'];

        $stmt = $conn->prepare("INSERT INTO producten(pr_naam, pr_prijs, pr_ct_id)
                                VALUES (?,?,?)");
        $stmt->bind_param("sdi", $naam, $prijs, $categorie);

        $naam = $postvars["naam"];
        $prijs = $postvars["prijs"];
        $categorie = $postvars["categorie"];

        $stmt->execute();
    }
}

// --- Step 3.99: close the DB connection
mysqli_close($conn);

// --- Step 4: Deliver Response

// Return Response to browser
deliver_response($postvars['format'], $response);
