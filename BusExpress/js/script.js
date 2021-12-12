$( document ).ready(function() {
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
});