$(document).ready(function() {
  $("#design_image").click(function() {
    $("#dinfo").slideDown();
    $("#design_image").slideDown().hide();
  });
  $("#dinfo").click(function() {
    $("#design_image").slideDown().show();
    $("#dinfo").slideUp().hide();
  });


  $("#development-image").click(function() {
    $("#devinfo").slideDown();
    $("#development-image").slideDown().hide();
  });
  $("#devinfo").click(function() {
    $("#development-image").slideDown().show();
    $("#devinfo").slideUp().hide();
  });
  
  $("#mgt_image").click(function() {
    $("#pinfo").slideDown();
    $("#mgt_image").slideDown().hide();
  });
  $("#pinfo").click(function() {
    $("#mgt_image").slideDown().show();
    $("#pinfo").slideUp().hide();
  });

  $("#studio-image").mouseover(function(){
    $(".text1").show();
  }).mouseout(function(){
    $(".text1").hide();
  });
});
