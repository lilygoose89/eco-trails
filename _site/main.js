$(document).ready(function() {

  //click hamburger icon
  $('.toggle-mobile-menu').click(function(){

      //show mobile menu
      $('#mobile-menu').toggleClass('mobile-menu-visible')
  });

  //smooth scrolling better because rachel
  $("a[href^='#']").click(function () {
    var link = this.hash.substr(1);
    var section = $('*[id=' + link + ']');

    $('html,body').animate({
      scrollTop: section.offset().top - 20
    }, 800);
    return false;
  });

});
