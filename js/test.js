var maxValue = 3 ;
var count=Number($(".first").text());



   $(".next").on("click",function(){
     if(count< maxValue){
       count++
      $(".first").text(count);
      }
      else{
        $(".first").text(maxValue); 
      }
      $(".next").css({
        background:"red",
        color:"white",

      })
      $(".previous").css({
        background:"white",
        color:"gray",
      
      })  
     });

     




var count=Number($(".first").text());


$(".previous").on("click",function(){

count--;
$(".first").text(count);
$(".previous").css({
  background:"red",
  color:"white",

}) 
$(".next").css({
  background:"white",
  color:"gray",

}) 
});