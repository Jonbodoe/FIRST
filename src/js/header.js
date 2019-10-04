$(document).ready(function () {
    $(window).scroll(function (e) {
        $('nav').toggleClass('navbar-light bg-light shadow', $(this).scrollTop() > 2100);
        $('nav').toggleClass('navbar-dark text-white', $(this).scrollTop() < 2100);
        $(document).scrollTop() > 930 ? 
            $('#headerImg').css('background-attachment','scroll') 
        :
            $('#headerImg').css('background-attachment','fixed');

    })
  });