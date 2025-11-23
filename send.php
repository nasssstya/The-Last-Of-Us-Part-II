<?php
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email1    = htmlspecialchars($_POST['email1']);
    $email2   = htmlspecialchars($_POST['email2']);

    $mail = new PHPMailer(true);

    try {
        // Настройки SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'nasssstya1711@gmail.com';
        $mail->Password   = 'sjgd iqol exoz uhys';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // От кого и кому
        $mail->setFrom('nasssstya1711@gmail.com', 'Website Contact Form');
        $mail->addAddress('nasssstya1711@gmail.com');

        // Контент письма
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "<b>Email1:</b> $email1 <br><b>Email2:</b> $email2 <br>";

        $mail->send();
        echo "Message has been sent successfully!";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
