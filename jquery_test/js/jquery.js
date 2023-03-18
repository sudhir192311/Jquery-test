$(document).ready(function(){
        
            
    console.log("first code")
    $("#bt1").click(function(){
        $("#container").hide();
      });
      $("#bt2").click(function(){
        $("#container").show();
      });
      $("#bt4").click(function(){
        $("#container").fadeToggle();
      });
      $("#bt3").click(function(){
        $("#container").fadeTo(250,0.5);
      });
      $("#btn5").click(function(){
        $("#container").slideUp(2000);
      });
      $("#btn6").click(function(){
        $("#container").slideDown(2000);
      });
      $("#btn7").click(function(){
        $("#container").slideToggle(2000);
      });

});