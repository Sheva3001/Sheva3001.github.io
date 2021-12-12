<?php
    $name = $_POST['name'];
    $phone = $_POST['tel'];
    $head = 'Остались вопросы';

    $token = "2038238892:AAG96jVGaHBvETaQT9qtZcYi4d9KGOOi9AU";
    $chat_id = "-1001599491238";
    $arr = array(
        'Форма: ' => $head,
        'Имя пользователя: ' => $name,
        'Телефон: ' => $phone
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    echo $sendToTelegram;
?>