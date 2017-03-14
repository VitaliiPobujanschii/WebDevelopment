
function tweet(message) {
window.open('https://twitter.com/intent/tweet?text='   + encodeURIComponent(message));
}

var msg;
function tweetHandler() {
tweet($(msg).text()); 
}

function GetAQuote() {
 
  $.ajax({
    url: "https://random-quote-generator.herokuapp.com/api/quotes/random",
    type: 'get',
    data: {},
    datatype: 'json',
    success: function(data) {
     // quote = JSON.parse(data);
      msg = $(".quote").html('&quot;' + data.quote + '&quot;');
      $(".author").html(data.author);
      $(".button").html("Get a new quote");
    },
    error: function(err) {
      console.log(err);
    }  
  });
};

$(document).ready(function() {

  GetAQuote();
  
  $(".button").click( function(event){
      GetAQuote();
  });
  $('.twitter-share-button').on('click', tweetHandler);
});


//Code below works well if replace two last functions above 
/*
function GetAQuote() {
      $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", 
                // This API not requires any authetication or APIkey
      function(data) {
       msg = $(".quote").html('&quot;' + data.quote + '&quot;');
        $(".author").html(data.author);
        $(".button").html("Get a new quote");
    });
};

$(document).ready(function() {
  GetAQuote(); // Request random qoute directly after page loads
  $(".button").click( function(event) {
    GetAQuote();
  });
$('.twitter-share-button').on('click', tweetHandler);
});
*/
