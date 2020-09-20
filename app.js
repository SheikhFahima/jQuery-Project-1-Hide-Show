$(document).ready(function(){
   $('.btn1').click(function(){
      $('.btn1').hide(2000); 
   }); 
    $('.btn2').click(function(){
      $('.btn1').show(2000); 
   }); 
    
       $('.btn3').click(function(){
      $('.show h1').hide(2000); 
   }); 
    $('.btn4').click(function(){
      $('.show h1').show(2000); 
   });
   
         $('.btn5').click(function(){
      $('.toggle h1').toggle(2000); 
   }); 
    
         $('.btn6').dblclick(function(){
      $('.dbl h1').css(
    "color","red"
      ); 
   }); 
});