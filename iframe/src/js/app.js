

var app = angular.module("app", ['ui.bootstrap','ngRoute']);

//Define Routing for app
app.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
	when('/date', {
		templateUrl: 'templates/date.html',
		controller: 'dateController'
	}).
	when('/shipping', {
		templateUrl: 'templates/shipping.html',
		controller: 'shippingController'
	}).
	when('/info', {
		templateUrl: 'templates/info.html',
		controller: 'infoController'
	}).
	when('/payment', {
		templateUrl: 'templates/payment.html',
		controller: 'paymentController'
	}).
	otherwise({
		redirectTo: '/date'
	});
}]);


app.controller('navController',['$scope', function($scope) {


}]);