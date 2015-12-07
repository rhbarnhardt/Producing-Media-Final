//goes to getjson first to access server
function getSlides() {
  $.getJSON('data/data.json')
  .done( function(data){                                 // SERVER RETURNS DATA
  	$.each(data.slides, function(key, val) {
  		
      $("#buttons").append("<button id='btn" + key + "'>" + (key+1) + "</button>");
    
      $("#btn" + key).on('click', function () {
        $(".slide").hide();
        
        $("#slide" + key).fadeIn(1000);
      });

  		msg = "<div class='slide' id='slide" + key + "'>"; 
  		
  		msg += "</div>";

  		$('#content').append(msg); 

  		$('#slide' + key).css("background", "url(" + val.image + ") top center no-repeat");
        $('#slide' + key).hide();

      if (key === 0) {
        $('#slide0').fadeIn(1000);
      };
	  });
   
     
    $('#buttons').append(
        "<button id='prev'>back</button><button id='next'>forward</button>"
    ); 
     

    $("#prev").on ('click', function () {
      
        var i = $(".slide:visible").index();
        
        if (i < 1) {
            $(".slide:visible").hide();
            $(".slide:last").show("explode",1000);        
        } else {
            $(".slide:visible").hide().prev(".slide").show("explode",1000);
        };
        
    });    
    
    $("#next").on ('click', function () {

        var i = $(".slide:visible").index();
        var len = $(".slide").length - 1;
        
        if (i < len) {
        $(".slide:visible").hide().next(".slide").show( "blind",1000);
        } else {
            $(".slide:visible").hide();
            $(".slide:first").show("blind",1000);
        };
    });                           
  }).fail( function() {     
                               // THERE IS AN ERROR
    $('#content').text('Sorry, we cannot load data.'); 
      // Show error message 
  }).always( function() {                                // ALWAYS RUNS
     var reload = '<a id="refresh" href="#">';           // Add refresh link
     reload += 'Reload</a>';
     $('#reload').html(reload);                          // Add refresh link
     $('#refresh').on('click', function(e) {             // Add click handler
       e.preventDefault();                               // Stop link
       getSlides();                                      
     });
  }); 
}

$(document).ready(function() {

	getSlides();  
    
});

