$(document).ready(function() {

  var UserAgent = "JujuWiki/0.1 (mendoj@gmail.com)";

  var search="bernie";

  //var url = "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="+ search+"&callback=JSON_CALLBACK";

  // Create the XHR object.
  /*function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      // XHR for Chrome/Firefox/Opera/Safari.
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      // XDomainRequest for IE.
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      // CORS not supported.
      xhr = null;
    }
    return xhr;
  }

  // Helper method to parse the title tag from the response.
  function getTitle(text) {
    return text.match('<title>(.*)?</title>')[1];
  }

  // Make the actual CORS request.
  function makeCorsRequest() {
    // All HTML5 Rocks properties support CORS.
    var url = 'http://updates.html5rocks.com';

    var xhr = createCORSRequest('GET', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    // Response handlers.
    xhr.onload = function() {
      var text = xhr.responseText;
      var title = getTitle(text);
      alert('Response from CORS request to ' + url + ': ' + title);
    };

    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };

    xhr.send();
  }*/

//console.log(api);;
  //var api = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json"

  /*$.getJSON(api, function(json) {
    $(".results").html(JSON.stringify(json));
    console.log(JSON.stringify(json));
  });*/

  // Using jQuery
  var remoteUrlWithOrigin = "http://en.wikipedia.org/w/api.php?action=query"
  var queryData = "generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=bernie&format=json"
$.ajax( {
    url: remoteUrlWithOrigin,
    data: queryData,
    dataType: 'json',
    type: 'GET',
    headers: {
      'Api-User-Agent': 'JujuWiki/0.1 (http://codepen.io/jujubeee314/; mendoj@gmail.com)'/*,
      'Content-Type': 'text/html; charset=utf-8',
      'Access-Control-Allow-Origin': 'http://codepen.io/jujubeee314/',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type'*/
    },
    success: function(data) {
       // do something with data
       console.log(JSON.stringify(data));
    }
} );

function wiki_auth(login, pass, ref){
    $.post('http://en.wikipedia.org/w/api.php?action=login&lgname=' + login +
            '&lgpassword=' + pass + '&format=json', function(data) {
        if(data.login.result == 'NeedToken') {
            $.post('/w/api.php?action=login&lgname=' + login +
                    '&lgpassword=' + pass + '&lgtoken='+data.login.token+'&format=json',
                    function(data) {
                if(!data.error){
                   if (data.login.result == "Success") {
                        document.location.href=ref;
                   } else {
                        console.log('Result: '+ data.login.result);
                   }
                } else {
                   console.log('Error: ' + data.error);
                }
            });
        } else {
            console.log('Result: ' + data.login.result);
        }
        if(data.error) {
            console.log('Error: ' + data.error);
        }
    });
}

wiki_auth('mendoj', 'Starwars111', '/w/');

});
