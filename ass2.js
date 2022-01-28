$(document).ready(function(){
    $(".language").hide();
    $("#Tab_1").show();
    $("#hindi").click(function(){
        $("#Tab_1").fadeIn();
        $("#Tab_2").hide();
        $("#Tab_3").hide();
        $("#Tab_4").hide();
    })
    $("#english").click(function(){
        $("#Tab_2").fadeIn();
        $("#Tab_1").hide();
        $("#Tab_3").hide();
        $("#Tab_4").hide();
    })
    $("#marathi").click(function(){
        $("#Tab_3").fadeIn();
        $("#Tab_1").hide();
        $("#Tab_2").hide();
        $("#Tab_4").hide();
    })
    $("#others").click(function(){
        $("#Tab_4").fadeIn();
        $("#Tab_1").hide();
        $("#Tab_2").hide();
        $("#Tab_3").hide();
    })

     $(window).resize(function(){
         var width = $(window).width();
         if(width < 768){
            $(".tab").css("display","block");
            $(".language").hide();
            $(".tab a").click(function(){
               var tabs=  $(this).attr("href");
               $(".language").show();
               $("#" + tabs ).show();
               return false;
            });
        }
        else{
           $(".tab").css("display", "inline");
           $(".language").hide();
           $("#Tab_1").show();
           return false;
        }
    });
});
