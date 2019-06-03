//newsletter signup and modal
$(document).ready(function(){
 
  $("#myBtn").click(function(){
    $(".newsletter_form").modal({show: true});
  });
  
 
//shopping cart
function myFunction(){
	document.getElementById("cartUpdate")
            $(".add-to-cart").click(function(){
                $('.cartUpdate').html(function(i, val) {return val*1+1 });
            });

//2nd attemt at shopping cart
 var currentItems = 0;
 $(document).ready(function(){
 $(".add-to-cart").click(function(){
           currentItems++;
           $(".cartUpdate").text(currentItems);
       });
});



		
