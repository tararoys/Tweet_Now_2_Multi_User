$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  
  $( "#tweet" ).submit(function( event ) {
    event.preventDefault();
    alert("hello");

   $.ajax({
    url : "/tweet",
    type: "POST",
    data : $("#tweet").serialize(),
    success: function()
    { 
        $("#previous_tweet").text("Success!");
        console.log('success');
        document.forms["tweet"].reset();
    }

    });

    $("#previous_tweet").text("Waiting!");


  });
});
