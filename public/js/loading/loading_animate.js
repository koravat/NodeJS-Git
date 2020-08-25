$('#preloader').ready(function() {
    $('.pour') //Pour Me Another Drink, Bartender!
        .delay(1200)
        .animate({
            height: '720px'
        }, 2000)
        .delay(1600)
        .slideUp(800);

    $('#liquid') // I Said Fill 'Er Up!
        .delay(3400)
        .animate({
            height: '170px'
        }, 2500);

    $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
        .delay(3400)
        .animate({
            bottom: '175px'
        }, 2500);
});