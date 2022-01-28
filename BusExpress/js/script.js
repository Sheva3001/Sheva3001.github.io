$( document ).ready(function() {

    const DNR_UKR = $("#DNR_UKR");
    const UKR_DNR = $("#UKR_DNR");
    const DNR_UKR_BTN = $("#DNR_UKR_BTN");
    const UKR_DNR_BTN = $("#UKR_DNR_BTN");
    
    UKR_DNR_BTN.on("click", () => {
        if(!UKR_DNR_BTN.hasClass('active')) {
            UKR_DNR_BTN.addClass('active');
            DNR_UKR_BTN.removeClass('active');
            UKR_DNR.addClass('active');
            DNR_UKR.removeClass('active');
        }
    });
    DNR_UKR_BTN.on("click", () => {
        if(!DNR_UKR_BTN.hasClass('active')) {
            DNR_UKR_BTN.addClass('active');
            UKR_DNR_BTN.removeClass('active');
            DNR_UKR.addClass('active');
            UKR_DNR.removeClass('active');
        }
    });


    $("#booking_btn").on("click", function() {
        let name = $("#booking_name").val();
        let tel = $("#booking_tel").val();
        if(name == "") {
            return false;
        }
        if(tel == "") {
            return false;
        }
        $.ajax({
            type: 'POST',
            url: "/form-booking.php",
            data: { 'name': name, 'tel': tel },
            dataType: 'html',
            cache: false,
            success: function (data) {
                if(!data)
                    $("#booking").html('<h2 class="promo-form__title">Ошибка!</h2>');
                else {
                    $("#booking").trigger("reset");
                    $("#booking").html('<h2 class="promo-form__title">Отправлено</h2>');
                }
            },
        });
    });

    $("#questions_btn").on("click", function() {
        let name = $("#questions_name").val();
        let tel = $("#questions_tel").val();
        if(name == "") {
            return false;
        }
        if(tel == "") {
            return false;
        }
        $.ajax({
            type: 'POST',
            url: "/form-questions.php",
            data: { 'name': name, 'tel': tel },
            dataType: 'html',
            cache: false,
            success: function (data) {
                if(!data)
                    $("#questions").html('<h2 class="promo-form__title">Ошибка!</h2>');
                else {
                    $("#questions").trigger("reset");
                    $("#questions").html('<h2 class="promo-form__title">Отправлено</h2>');
                }
            },
        });
    });
});
