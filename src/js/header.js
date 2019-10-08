$(document).ready(function () {
    $(window).scroll(function (e) {
        $('nav').toggleClass('navbar-light bg-light shadow', $(this).scrollTop() > 1500);
        $('nav').toggleClass('navbar-dark text-white', $(this).scrollTop() < 1500);
    })
  });