(function ($) {

    /*------------------
        Menu active
    --------------------*/
    $('.nav-item').click(function(){
        $('.nav-item').removeClass('active');
        $(this).addClass("active");
    });

    $('.logo').click(function(){
        $('.nav-item').removeClass('active');
        $('.home').addClass("active");
    })

})(jQuery);