<?php
// Variables
// Read raw input from POST request
$json = file_get_contents('php://input');

// Decode JSON
$data = json_decode($json, true);

$email = "admin@example.com";
$password = "MySecretPassword88?";

// Check if email and password are provided
if (isset($data['email']) && isset($data['password'])) {
    // Check if email and password match the specified values
    if ($data['email'] === $email && $data['password'] === $password) {
        // Return success JSON response
        $response = array(
            "success" => array(
                "id" => 1,
                "first_name" => "Demo",
                "last_name" => "Example",
                "email" => $email,
                "status" => "Active",
                "created_at" => "2023-10-06 17:39:58",
                "updated_at" => "2024-03-19 11:44:18",

            ),
            "expires" => "2024-05-25 15:54:34",
            "token" => "tokenplease",
        );
        $http_code = 200; // Success HTTP status code
    } else {
        // Return error JSON response for invalid email or password
        $response = array("error" => "The email or password you entered is invalid");
        $http_code = 400; // Bad Request HTTP status code
    }
} else {
    // Return error JSON response if email or password is missing
    $response = array("error" => "Email and password are required fields");
    $http_code = 400; // Bad Request HTTP status code
}

// Set HTTP response headers
header('Content-Type: application/json');
http_response_code($http_code);

// Output JSON response
echo json_encode($response);