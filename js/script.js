
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // fade in observed elements that are in view
        entry.target.classList.replace('fadeOut', 'fadeIn');
      } 
      
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  const fadeElms = document.querySelectorAll('.row');
  fadeElms.forEach(el => observer.observe(el));

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
