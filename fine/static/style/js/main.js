$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('.goTop').fadeIn();
        } else {
            $('.goTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.goTop').click(function(){
        $('html, body').animate({scrollTop : 0},300);
        return false;
    });
});
