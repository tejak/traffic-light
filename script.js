
$(document).ready(function() {
  
   /* code for button 1  -- Turn the light Red */
  
   /* code for button 2 --- Say STOP */
   $('#button2').click(
     function() {
         $('#top-light').html("<p> STOP </p>");
     }
   );
  
  $('#button1').click(
     function() {
         $('#top-light').css("background-color", "red");
     }
   );
  
   /* code for button 3 -- Turn the light Yellow */
   $('#button3').click(
     function() {
         $('#middle-light').css("background-color", "yellow");
     }
   );
  
   /* code for button 4 -- Turn the light Green */
   $('#button4').click(
     function() {
         $('#bottom-light').css("background-color", "green");
     }
   );
   /* code for button 5 -- Say GO! */
  $('#button5').click(
     function() {
         $('#bottom-light').html("<p> GO! </p>");
         $('#bottom-light').css("color", "blue");
     }
   );
   /* code for button 6 -- Make Green Light Blink -- Extension!! */
  $('#button6').click(
     function() {
       $('#bottom-light').css("background-color", "green");
       $('#bottom-light').fadeOut(500);
       $('#bottom-light').fadeIn(500);
       $('#bottom-light').fadeOut(500);
       $('#bottom-light').fadeIn(500);
       $('#bottom-light').fadeOut(500);
       $('#bottom-light').fadeIn(500);
       $('#bottom-light').fadeOut(500);
       $('#bottom-light').fadeIn(500);
       $('#bottom-light').css("background-color", "white");
     }
   );
  
  
  
  
});
                  
                  
                  