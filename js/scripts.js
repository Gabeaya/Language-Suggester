//Business Logic:

//User Interface Logic:
$(document).ready(function() {
  $("button#start").click(function() {
    $("#surveyShowing").fadeIn();
    $("#start").hide();
  });
  $("form#survey").submit(function(event) {
    const dumbTears = $("select#dumb-tears").val();
    const  projectType = $("select#project-type").val();
    const somethingToMaster = $("select#something-to-master").val();
    const money = $("select#money") .val();
    
    if (projectType === 'web-development') {
      matchShowing = "Javascript";
    } else if (projectType === 'web-design') {
      matchShowing = "HTML5";
    } else if (projectType === 'video-game') {
      matchShowing = "C++";
    } else if (projectType === 'desktop-software') {
      matchShowing = "Swift";
    } 
    
    $("#matchShowing").show();
    $(".row, .col, #find").hide();
    $("#language").text(matchShowing);

    event.preventDefault();
  });
  
});