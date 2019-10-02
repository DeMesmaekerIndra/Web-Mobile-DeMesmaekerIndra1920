<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
$servername = "localhost";
$username = "root"; // dangerous
$password = ""; // dangerous
$dbname = "test"; // standaard test databank

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname) or die(mysqli_connect_error());

$new_pr_name = $_POST["Productnaam"];
$new_pr_Prijs = $_POST["Prijs"];
$new_pr_ct_id = $_POST["Categorie"];

$sql = "INSERT INTO producten (pr_naam, pr_prijs, pr_ct_id) VALUES ('$new_pr_name', $new_pr_Prijs, $new_pr_ct_id)";

if (!mysqli_query($conn, $sql)) {
    echo "Product not added";
} else {
    echo "Product added";
}

header("refresh:2; url=Form.html");
?>
</body>
</html>