// handlebars
window.onload = function() {
  //Grab the inline template
  var template = document.getElementById('template').innerHTML;

  //Compile the template
  var compiled_template = Handlebars.compile(template);

  //Render the data into the template
  var rendered = compiled_template({tel: "02 9889 0000"});

  //Overwrite the contents of #target with the renderer HTML
  document.getElementById('target').innerHTML = rendered;
}

// Smooth scroll to any anchor specified
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

// hamburger transformation
$(document).ready(function(){
  var $hamburger = $(".hamburger");
    var $menu = $('.mob-menu');
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        $menu.toggleClass("is-closed");
    });
});