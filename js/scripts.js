//Business Logic:

//User Interface Logic:
$(document).ready(function() {
  $("button#start").click(function() {
    $("#survey-showing").fadeIn();
  });
  $("form#survey").submit(function(event) {
    
    const projectType = $("select#project-type").val();
    const somethingToMaster = $("select#something-to-master").val();
    const money = $("select#money") .val();
    
    if (projectType === "web-developement") {
      let matchShowing = "Javascript";
    } else if (projectType === "web-design") {
      let matchShowing = "C++";
    } else if (projectType === "video-game") {
      let matchShowing = "HTML5";
    } else if (projectType === "desktop-software") {
      let matchShowing = "Your mom";
    } 
    $("#language").text(matchShowing);
    $("#matchShowing").show();

    event.preventDefault();
  });
});