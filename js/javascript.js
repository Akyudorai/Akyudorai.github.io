$( document ).ready(function() {
    //console.log( "ready!" );

    var section = $('li');

    function toggleAccordion() {
      section.removeClass('active');
      $(this).addClass('active');
    }

    section.on('click', toggleAccordion);
});