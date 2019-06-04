//modal for newsletter, contact, and order placement
$(document).ready(function(){
 
  $("#myBtn").click(function(){
    $(".newsletter_form").modal({show: true});
  });

  
//shopping cart
	document.getElementById("cartUpdate")
            $(".add-to-cart").click(function(){
                $('.cartUpdate').html(function(i, val) {return val*1+1 });
            });

//2nd attemt at shopping cart
 var currentItems = 0;
 $(".add-to-cart").click(function(){
           currentItems++;
           $(".cartUpdate").text(currentItems);
       });

//checkout form validation
 (function() {
        'use strict';
        window.addEventListener('load', function() {
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();
  });
      