<?php
// Set your database credentials
$dbHost = 'bnhe65necx34vae9apo3-mysql.services.clever-cloud.com';
$dbName = 'bnhe65necx34vae9apo3';
$dbUsername = 'u7srq0f3poefbkuw';
$dbPassword = 'qcN4sgGjrFaOcqHyOLCk';

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
 