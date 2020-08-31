<?php
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

$email_error = "";
$message_error = "";

$errorMessage = '';

if (!empty($_POST)) {

    $email = $_POST['email_address'];
    $message = $_POST['message'];

    if (empty($email)) {
        $email_error = 'Email is empty';
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $email_error = 'Email is invalid';
    }

    if (empty($message)) {
        $message_error = 'Message is empty';
    }


    if (!empty($email_error) || !empty($message_error)) {
        //$allErrors = urlencode(join('<br/>', $errors));
        //$errorMessage = "<p style='color: red;'>{$allErrors}</p>";
        $params = !empty($email_error) ? "email_error=".$email_error : "";
        $params .= !empty($message_error) ? (empty($params) ? "" : "&")."message_error=".$message_error  : "";
    
        header("Location: index.php?{$params}#contacts");
    } else {
        $mail = new PHPMailer();

        // specify SMTP credentials
        $mail->isSMTP();
        $mail->SMTPDebug  = 0;
        $mail->SMTPAuth   = TRUE;
        $mail->SMTPSecure = "tls";
        $mail->Port       = 587;
        $mail->Host       = "smtp.gmail.com";
        $mail->Username   = "giorgio.mannarini@gmail.com";
        $mail->Password   = getenv('GMAIL_PWD'); //"You tried!";

        $mail->setFrom($email, 'My Website');
        $mail->Subject = 'New message from your website';
        $mail->AddAddress("giorgio.mannarini@gmail.com", "My Website");

        // Enable HTML if needed
        $mail->isHTML(true);

        $bodyParagraphs = ["Email: {$email}", "Message:", nl2br($message)];
        $body = join('<br />', $bodyParagraphs);
        $mail->Body = $body;

        if ($mail->send()) {

            header('Location: ./index.php?confirm#contacts'); // redirect to 'thank you' page
        } else {
            $errorMessage = urlencode('Oops, something went wrong.'); //Mailer Error: ' . $mail->ErrorInfo;

            header("Location: index.php?error={$errorMessage}#contacts");
        }
    }
} else {
    header("Location: ./index.php");
}
