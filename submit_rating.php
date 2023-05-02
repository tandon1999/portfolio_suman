<?php
// Set your database credentials
$dbHost = 'localhost';
$dbName = 'id20685194_ratingsuman	';
$dbUsername = 'id20685194_root	';
$dbPassword = 'ivTG*7$qV7V^^zPv#7NJ';

// Connect to your database using PDO
try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName", $dbUsername, $dbPassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Could not connect to the database: " . $e->getMessage());
}

// Get the rating value from the POST data
$rating = $_POST['rating'];

// Prepare a SQL statement to insert the rating into the database
$stmt = $pdo->prepare("INSERT INTO ratings (value) VALUES (:rating)");

// Bind the rating value to the parameter in the SQL statement
$stmt->bindParam(':rating', $rating);

// Execute the SQL statement to insert the rating into the database
$stmt->execute();

echo "<div style='background: #45ba52; text-align: center; font-weight:  display: flex; font-size: 24px; bold; padding: 100px; '>Thank you for rating this portfolio!</div>";

?>
 