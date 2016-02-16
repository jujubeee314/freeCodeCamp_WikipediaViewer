$(document).ready(function() {

  var search;

var api = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+ search+"&callback=JSON_CALLBACK";

console.log(api);;
  //var api = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"

  $.getJSON(api, function(json) {
    $(".results").html(JSON.stringify(json));
    console.log(JSON.stringify(json));
  });

});
