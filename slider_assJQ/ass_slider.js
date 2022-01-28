
$(document).ready(function(){

  $(".next").on("click",function(e){
    var currentactiveimage = $(".active");
    var nextactiveimage = currentactiveimage.next();
    if(nextactiveimage.length == 0){
      nextactiveimage = $(".slide-image img ").first(); 
    }
    currentactiveimage.removeClass("active").addClass("image-slide").css("z-index", -10);
    nextactiveimage.addClass("active").removeClass("image-slide").css("z-index", 20);
    $(".slide-image img").not([currentactiveimage ,nextactiveimage]).css("z-index", 1);
    e.preventDefault();
   });

    $(".pre").on("click",function(e){
      var currentactiveimage = $(".active");
      var beforeactiveimage = currentactiveimage.next();

      if(beforeactiveimage.length == 0){
      beforeactiveimage = $(".slide-image img ").first();
      }
      currentactiveimage.removeClass("active").addClass("image-slide").css("z-index", -10);
      beforeactiveimage.addClass("active").removeClass("image-slide").css("z-index", 20);
      $(".slide-image img").not([currentactiveimage ,beforeactiveimage]).css("z-index",-1 );

    e.preventDefault();
    
     });
   });
  


