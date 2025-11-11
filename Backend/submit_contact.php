<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "samoon";

// connect database
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die(json_encode(["status" => "error", "message" => "Database connection failed!"]));
}

// get data
$data = json_decode(file_get_contents("php://input"), true);
$full_name = $data["full_name"] ?? "";
$email = $data["email"] ?? "";
$phone_no = $data["phone_no"] ?? "";
$resume_content = $data["resume_content"] ?? "";

// validation
if (empty($full_name) || empty($email) || empty($phone_no) || empty($resume_content)) {
  echo json_encode(["status" => "error", "message" => "All required fields are needed."]);
  exit;
}

// insert
$sql = "INSERT INTO contact_submissions (full_name, email, phone_no, resume_content)
        VALUES ('$full_name', '$email', '$phone_no', '$resume_content')";

if ($conn->query($sql) === TRUE) {
  echo json_encode(["status" => "success", "message" => "Form submitted successfully!"]);
} else {
  echo json_encode(["status" => "error", "message" => $conn->error]);
}

$conn->close();
?>  
