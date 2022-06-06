$(document).ready(function () {
  $('.img_phone').hover(
    function () {
      $(this).addClass('animate__animated animate__tada');
    },
    function () {
      $(this).removeClass('animate__animated animate__tada');
    }
  )
})

$(document).ready(function () {
  $('.img_location').hover(
    function () {
      $(this).addClass('animate__animated animate__heartBeat');
    },
    function () {
      $(this).removeClass('animate__animated animate__heartBeat');
    }
  )
})

ScreenWidth = $("body").width();
if (ScreenWidth < "930") {
  var elem = $(".wow");
  elem.removeClass("wow");
} 