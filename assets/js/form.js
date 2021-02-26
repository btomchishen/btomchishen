$('#subscription_form').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: 'POST',
        url: '../assets/subscription_ajax.php',
        data: $form.serialize()
    }).done(function () {
        $form[0].reset()
        alert('Thank you for the subscription!')
    }).fail(function () { alert('Something went wrong') });
});