//Business Logic:

//User Interface Logic:
$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
  });
  $("button#start").click(function() {
    $(".survey-showing").show();
  });
  
})