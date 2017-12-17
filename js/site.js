$(document).ready(function () {
    var state = false;
    $('#nav-icon3').click(function () {
        if (state === false) {
            $(this).toggleClass('open');
            $('.navbar').css('background', '#343a40');
            state = true;
        } else {
            $(this).toggleClass('open');
            $('.navbar').css('background', 'transparent');
            state = false;
        }
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

function initMap() {
    var uluru = {
        lat: 51.052260,
        lng: 3.717568
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
