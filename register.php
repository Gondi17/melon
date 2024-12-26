<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // הצפנת סיסמה
    $email = $_POST['email'];

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, password, email) VALUES (:username, :password, :email)");
        $stmt->execute(['username' => $username, 'password' => $password, 'email' => $email]);
        echo "הרשמה בוצעה בהצלחה!";
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) { // מניעת כפילות
            echo "שם המשתמש או המייל כבר קיימים!";
        } else {
            echo "שגיאה בהרשמה: " . $e->getMessage();
        }
    }
}
?>
