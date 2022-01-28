<?php
    $name = $_POST['name'];
    $tel = $_POST['tel'];

    $to = "igor.sheva2018@yandex.ru";
    $subject = "=?utf-8?B?".base64_encode("Забронировать место")."?=";
    $headers = "From: Site\r\nReply-to: Site\r\nContent-type: text/html; charset=utf-8\r\n";
    $message = "<b>Имя:</b> " . $name . "<br><b>Номер телефона:</b> " . $tel;

    $success = mail($to,$subject,$message,$headers);
    echo $success;
?>