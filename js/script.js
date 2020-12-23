$(document).ready(function(){
  $(".sidebar-cross").click(function(){
    $(".sidebar-header").toggleClass("hide-sidebar");
    $("section").toggleClass("padding-left");
    $(".sidebar-cross").toggleClass("rotate-arrow");
  });
  $(".getstarted-button").click(function(e){
    e.preventDefault();
    $(".getstarted-button img ").css("transform","translateX(150px)")
  });
  $(".slider-arrow-left").click(function(){
    var x = $(".slide-container > .slides").width();
    var offsetx = $(".slide-container").offset();
    var moveSlider = offsetx.left - x  ;
    console.log(x , offsetx ,moveSlider)

    $(".slide-container").css("transform",'translateX(-' + moveSlider + 'px)');
  });
});
