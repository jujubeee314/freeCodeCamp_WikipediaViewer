angular
  .module('wikipediaApp', ['ngAnimate']);

angular
  .module('wikipediaApp')
  .factory('wikipediaFactory', ['$http', function($http) {

    var wikipediaFactory = {};

    var urlBase = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&continue=&generator=search&exchars=300&exlimit=10&exintro=1&explaintext=1&exsectionformat=plain&gsrsearch=";
    var urlBack = "&gsrnamespace=0&gsrprop=snippet%7Csize&gsrlimit=10&callback=JSON_CALLBACK";

    wikipediaFactory.getArticles = function(search) {
      return $http.jsonp(urlBase + search + urlBack);
    }

    return wikipediaFactory;

  }]);

angular
  .module('wikipediaApp')
  .controller('wikipediaController', ['$scope', 'wikipediaFactory',
      function($scope, wikipediaFactory) {

        $scope.articles = [];
        var pageUrlbase = "https://en.wikipedia.org/?curid=";


        $scope.search = function(searchInput) {

          wikipediaFactory.getArticles(searchInput)
            .then(function(response) {
              //console.log(response.data.query.pages);
              var values = response.data.query.pages;
              angular.forEach(values, function(value, key) {
                $scope.articles.push({
                  title: value.title,
                  url: pageUrlbase + value.pageid,
                  body: value.extract
                })
              });
              //console.log($scope.articles);
            });



        }
        

  }]);