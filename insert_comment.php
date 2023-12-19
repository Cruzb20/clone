<?php

$servername = "127.0.0.1:3307";
$username = "root";
$password = "";
$dbname = "crud";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


 
// Handle comment insertion
if (isset($_POST['comment'])) {
    
     // Get the comment text from the POST request
    $commentText = trim($_POST['comment']); // Trim to remove leading and trailing spaces
    
    // Check if the comment text is not empty
    if (!empty($commentText)) {
        // Use a prepared statement to prevent SQL injection
        $sql = "INSERT INTO comment (comments) VALUES (?)";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            // Bind the parameters
            $stmt->bind_param("s", $commentText);

            // Execute the statement
            if ($stmt->execute()) {
                  echo "successful"; // Indicate success
            } else {
                echo "Error executing statement: " . $stmt->error;
            }

            // Close the statement
            $stmt->close();
        } else {
            echo "Error preparing statement: " . $conn->error;
        }
    } else {
        echo "empty";
    }
}


// Handle comment delete
if (isset($_POST['delete'])) {
    // Get the comment ID from the POST request
    $commentId = isset($_POST['id']) ? $_POST['id'] : null;

    // Check if the comment ID is not empty
    if (!empty($commentId)) {
        // Use a prepared statement to prevent SQL injection
        $sql = "DELETE FROM comment WHERE id = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            // Bind the parameters
            $stmt->bind_param("i", $commentId);

            // Execute the statement
            if ($stmt->execute()) { 
                echo "successful"; // Indicate success
               
             } else {
                echo "Error executing statement: " . $stmt->error;
            }

            // Close the statement
            $stmt->close();
        } else {
            echo "Error preparing statement: " . $conn->error;
        }
    } else {
        echo "empty";
    }
}


 if (isset($_POST['update'])) {
    // Get the updated comment data from the POST request
    $commentId = isset($_POST['id']) ? $_POST['id'] : null;
    $updatedComment = isset($_POST['updated_comment']) ? $_POST['updated_comment'] : null;

    // Check if the comment ID and updated comment are not empty
    if (!empty($commentId) && !empty($updatedComment)) {
        // Use a prepared statement to prevent SQL injection
        $sql = "UPDATE comment SET comments = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            // Bind the parameters
            $stmt->bind_param("si", $updatedComment, $commentId);

            // Execute the statement
            if ($stmt->execute()) { 
                echo "successful"; // Indicate success
            } else {
                echo "Error executing update statement: " . $stmt->error;
            }

            // Close the statement
            $stmt->close();
        } else {
            echo "Error preparing update statement: " . $conn->error;
        }
    } else {
        echo "Empty comment ID or updated comment";
    }
}





$conn->close();
?>