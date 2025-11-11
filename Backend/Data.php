<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// include DB connection
include "db.php";

// simple test query: make sure table name sahi hai
$sql = "SELECT * FROM contact_submissions ORDER BY submitted_at DESC LIMIT 100";
$result = $conn->query($sql);

if($result === false) {
    echo json_encode(["status" => "error", "message" => "Query error: " . $conn->error]);
    exit;
}

$rows = [];
while($r = $result->fetch_assoc()){
    $rows[] = $r;
}

echo json_encode(["status" => "success", "data" => $rows]);
?>
