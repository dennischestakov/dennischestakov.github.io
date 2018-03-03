// When the user clicks on the top button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var supports = (function() {
    var d = $('#navBar'),
        c = "ontouchstart" in window || navigator.msMaxTouchPoints;
    if (c) {
        $('#navBar').remove();
    }
})();

$(window).scroll(function() {
  var scroll = $(window).scrollTop(); // how many pixels you've scrolled
  var os = $('#introSection').offset().top; // pixels to the top of introSection
  var ht = $('#introSection').height(); // height of introSection in pixels

  if(scroll > os + ht + 100){
    $('#navBar').addClass('solid');
  }

  if(scroll < os + ht + 100){
    $('#navBar').removeClass('solid');
  }
});
