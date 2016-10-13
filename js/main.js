
var app = angular.module('theThiLe', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        // Home
        .when("/", {
            templateUrl: "partials/home.html", 
            controller: "PageCtrl"
        })

        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html",
            controller: "PageCtrl"
        });

    $locationProvider.html5Mode(true);
}]);

/**
* Controls all other Pages
*/
app.controller('PageCtrl', function ($scope, $location, $http) {
    console.log('Working');
});

app.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});
