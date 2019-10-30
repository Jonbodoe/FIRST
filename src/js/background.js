$(document).ready(function () {
    $(window).scroll(function (e) {
        // $('img#arrow').addClass('hidden', $(this).scrollTop() > 1200);
        // $('img#arrow').removeClass('hidden', $(this).scrollTop() < 1200)
        $(this).scrollTop() > 380 ?
            $('img#arrow').addClass('hidden') : $('img#arrow').removeClass('hidden')
    })
});