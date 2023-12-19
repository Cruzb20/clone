<?php
$servername = "127.0.0.1:3307";
$username = "root";
$password = "";
$dbname = "crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set the time zone for MySQL
$conn->query("SET time_zone = '+08:00'");

$sql = "SELECT id, comments, timestamp FROM comment ORDER BY timestamp ASC";
$result = $conn->query($sql);

date_default_timezone_set("Asia/Manila");

if ($result->num_rows > 0) {
    // Output data of each row
   while ($row = $result->fetch_assoc()) {
        $timestamp = strtotime($row["timestamp"]);
        $formattedDate = date("M j, Y", $timestamp);
        $formattedTime = date("g:ia", $timestamp);

        echo "<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>";
        echo "<style>";
        echo "  .drt {";
        echo "    display: flex;";
        echo "    justify-content: center;";
        echo "    background: white;";
        echo "    border-radius: 10px;";
        echo "    margin-bottom: 15px;"; // Add margin for spacing between comments
        echo "  }";
        echo "  .comment-container {";
        echo "    width: 450px;"; // Set a maximum width for the comments
        echo "    word-wrap: break-word;"; // Break long words
        echo "    padding: 10px;"; // Add padding for better appearance
        echo "  }";
        echo ".dft{";
        echo "    text-align:right;";
        echo "    position:relative;";
        echo "    top:-17px;";
        echo " }";
        echo "#demoForm{";
        echo "    text-align:right;";
        echo " }";
        // Responsive CSS using media query
        echo "  @media (max-width: 768px) {";
        echo "    .drt {";
        echo "      flex-direction: column;";
        echo "      align-items: center;";
        echo "    }";
        echo "    .comment-container {";
        echo "      max-width: 100%;"; // Adjust the max-width for smaller screens
        echo "    }";
        echo "  }";
        echo "</style>";
        
        echo "<div class='drt'>";
        echo "  <div class='comment-container'>";
        echo "        <p align='center'>{$formattedDate}</p>";
        echo "        <p class='dft'>{$formattedTime}</p>";
        echo "   <p align='center' name='updated_comment'>{$row['comments']}</p><br/>";

echo "<form method='post' id='demoForm' action=''>";

echo "<button type='button'   onclick='updateServer({$row['id']}, \"{$row['comments']}\"), toggleButtons()' style='background: none; border: none; cursor:pointer' id='button1' >";
echo " <i class='bx bx-edit'  ></i> ";
echo "</button>";


  echo"  <button type='button'  onclick='deleteComment({$row['id']})' style='background: none; border: none; cursor:pointer'> ";
     echo"   <i class='bx bx-message-square-x' ></i> ";
  echo " </button> ";


echo "</form>";

        echo "  </div>";
        echo "</div>"; 
    


    }
} else {
    echo "<p>No comments yet.</p>";
}

$conn->close();
?>




