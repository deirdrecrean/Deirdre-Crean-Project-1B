$(document).ready(function(){
    $("#overlay-show").click(function(){
        $("#overlay").fadeIn();
    });
    $(".close").click(function(){
        $("#overlay").fadeOut();
    });
    $(".what button").click(function(){
        $(this).toggleClass("visible");
       $(this).next().toggleClass("visible");
    });
   
});


//need this for the rubric
  /*if($(this).hasClass("visible")){
            $(this).html("Show Less");
        } else{
            $(this).html("Show More");
        }

        do this with the welcome icon
        
        
        */