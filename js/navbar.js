$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
            $('#front').removeClass('text-light');
            $('#front').addClass('text-theme');
        } else {
            $('.navbar').removeClass('active');
            $('#front').addClass('text-light');
            $('#front').removeClass('text-theme');
        }
    });
});

$(window).scroll(function() {
    var scrolledY = -2 * $(window).scrollTop();
    $('.parallax-digital').css('background-position', 'left ' + (scrolledY) + 'px');
});

function myFunction() {
    var x = document.getElementById("timeline-hidden");
    var tl_toggle = document.getElementById("timeline-toggle")
    if (x.style.display === "none") {
        x.style.display = "block";
        tl_toggle.textContent = "Click to hide timeline"
    } else {
        x.style.display = "none";
        tl_toggle.textContent = "Click to expand timeline"
    }
}