$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});

$('.carousel').carousel();

$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
        $('.navbar').css('background', '#343a40');
    } else {
        $('.navbar').css('background', 'transparent');
    }
});
