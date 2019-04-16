function myFunction(x) {
    x.classList.toggle("change");
}
$(window).scroll(function() {
  $(".info").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
$(window).scroll(function() {
  $(".for").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide-left");
    }
  });
});