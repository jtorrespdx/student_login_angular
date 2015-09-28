var studentlogin = angular.module('studentlogin', ['ui.router']);

  studentlogin.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: "",
      templateUrl: "partials/home.html"
    });
  });
