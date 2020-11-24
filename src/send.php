<?php
// Файлы phpmailer
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

// Переменные, которые отправляет пользователь
$model = $_POST['model'];
$year = $_POST['year'];
$mileage = $_POST['mileage'];
$tel = $_POST['tel'];
$name = $_POST['name'];
$file = $_FILES['file'];

// Формирование самого письма
$title = "Заявка на оценку";
$body = "
<h2>Заявка на оценку</h2>
<table>
    <tbody>
        <tr>
            <td><b>Модель машины:</b></td>
            <td>$model</td>
        </tr>
        <tr>
            <td><b>Год выпуска:</b></td>
            <td>$year</td>
        </tr>
        <tr>
            <td><b>Пробег:</b></td>
            <td>$mileage км</td>
        </tr>
        <tr>
            <td><b>Телефон:</b></td>
            <td>$tel</td>
        </tr>
        <tr>
            <td><b>Имя:</b></td>
            <td>$name</td>
        </tr>
    </tbody>
</table>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    /*$mail->SMTPDebug = 2;*/
    $mail->Debugoutput = function ($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки вашей почты
    $mail->Host = 'smtp.spaceweb.ru'; // SMTP сервера вашей почты
    $mail->Username = 'info@sell-auto.ru'; // Логин на почте
    $mail->Password = 'f6Hqw4Pcvf'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('info@sell-auto.ru', 'SellAuto'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('leon093@gmail.com');
    $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
    if (!empty($file['name'][0])) {
        for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
            $filename = $file['name'][$ct];
            if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
                $rfile[] = "Файл $filename прикреплён";
            } else {
                $rfile[] = "Не удалось прикрепить файл $filename";
            }
        }
    }
// Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } else {
        $result = "error";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);