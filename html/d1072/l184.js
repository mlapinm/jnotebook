$(function() {
  //var version = "1.2";
  //alert(window.version);

 /*
 $('#clickMe').click(function() {
   $('#main').append('You should only see this if you click the plus!');
 }); 
  */

  $('#main').append("<img src='l182plus.png' alt='Click me to see the paragraph' id='clickMe' />");
  
  $('#clickMe').toggle(function() {
    $('#message').show('fast');
    $('#clickMe').attr('src', 'l182minus.png'); 

  }, function() {
    $('#message').hide('slow');
    $('#clickMe').attr('src', 'l182plus.png');
  });

  $('#message').hide();

});

/*
//var version = "1.2";

var AETRIS = {};

AETRIS.version = "1.2";

AETRIS.planet = {
  id: 34,
  name: "Intempstesta Nox"
}
*/