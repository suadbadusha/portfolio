

  $("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxMyR1cVvr_Ak5-pJYwSFaUeXhf3iepz37bJQSRVYkLCvZLU0MiZKgDX42f6rRwMAY3GQ/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    });
});




$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});




$('.btn-bottom').on("click", function () {
  var percentageToScroll =100;
  var percentage = percentageToScroll / 100;
  var height = $(document).scrollTop();
  var scrollAmount = height * (1 - percentage);

  console.log('scrollAmount: ' + scrollAmount);
  $('html,body').animate({
      scrollTop: scrollAmount
  }, 'slow', function () {
      console.log("reached top");
  });

});
