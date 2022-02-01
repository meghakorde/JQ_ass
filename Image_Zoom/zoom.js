$(document).ready(function(){
    $("#zoomin").on("click", function (){
        var images = document.getElementById("Rise");
        var currentWidth = images.clientWidth;
        var currentHeight = images.clientHeight;
         images.style.width = (currentWidth + 40) + "px";
        images.style.height = (currentHeight + 40) + "px";
    });
    $("#zoomout").on("click", function (){
        var images = document.getElementById("Rise");
        var currentWidth = images.clientWidth;
        var currentHeight = images.clientHeight;
        images.style.width = (currentWidth - 40) + "px";
       images.style.height = (currentHeight - 40) + "px";
   });
});