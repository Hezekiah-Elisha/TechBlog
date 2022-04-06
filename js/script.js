$(document).ready(function(){

  // $('.navbar-toggler').blur(function(){
  //
  //   if ($(window).width() < 960) {
  //     alert('Less than 960');
  //     $('#navbarSupportedContent').hide(500, console.log("working"));
  //   } else {
  //     alert('More than 960');
  //   }
  // });
  // $('.fader').fadeIn("3000");

  $(window).scroll(function(){
    if ($(window).width() < 960) {
      let scrollBottom = $(window).scrollTop();
      if (scrollBottom > 30){
        $("#brandc").animate({
          left: '10%',
        }, 800);
      }
    } else {

    }
  });

  $('.myc').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});

// window.onbeforeunload = function() {
//   return "Two buttons will be below this message asking if the user wants to stay on this page or leave.";
// }
