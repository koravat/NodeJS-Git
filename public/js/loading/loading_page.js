// window.addEventListener("load", function() {
//     var load_screen = document.getElementById("load");
//     document.body.removeChild(load_screen);
// });

// document.onreadystatechange = function() {
//     setTimeout(function() {
//         document.getElementsById('load').style.visibility = "hidden";
//     }, 2000);
// }

$(window).on('load', function() { // makes sure the whole site is loaded
    // $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(6000).fadeOut('slow'); // will fade out the white DIV that covers the website.
    window.setTimeout(function(){
        $('#NavBarTop').css({
            'visibility': 'visible'
        });

        $('html, body').css({
            'overflow': 'visible'
        });
    }, 6000);
})