$(document).ready(function() {

  //var search="Washington";

  $('#searchbtn').click(function(){
    if($('#searchArticle').val) {
      var search = $('#searchArticle').val();
      $('.ulresults').html('');
      $('#wikiAppContainer').removeClass("vertical-center");
      $.ajax({
        url: '//en.wikipedia.org/w/api.php',
        data: {
          action: 'query',
          list: 'search',
          srsearch: search,
          format: 'json'
        },
        dataType: 'jsonp',
        success: function (x) {
          console.log('title', x.query.search);
          console.log(x.query.search.length);
          for (var i = 0; i < x.query.search.length; i++) {
            $('.ulresults').html($('.ulresults').html()+"<li><h4>"+x.query.search[i].title+"</h4><p>"+x.query.search[i].snippet+"</p></li>");
            console.log('title', x.query.search[i].title);
          }
        }
      });
    }

  });






});
