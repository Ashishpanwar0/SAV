<?php
// DEV only: show errors so we can debug
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// DB credentials (Laragon default)
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "samoon";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    // Return JSON error (useful for front-end)
    header("Content-Type: application/json");
    echo json_encode(["status" => "error", "message" => "DB connection failed: " . $conn->connect_error]);
    exit;
}
?>
