var app = angular.module('myApp',['ngRoute']);

app.controller('HomeController', function($scope){
	$scope.message = 'HomeController';
});

app.config(function($routeProvider){
	
	$routeProvider
	
	.when('/',{
		templateUrl : 'index.html',
		controller : HomeController
	})
	
	.when('/Login',{
		templateUrl : 'login.html',
		controller : RegisterController
	})
	
		.when('/forum', {
			templateUrl : 'html_page/forum.html',
			controller  : 'forumController'
		})
		
		.when('/news', {
			templateUrl : 'html_pages/news.html',
			controller  : 'newsFeedsController'
		})
		
		.when('/blog', {
			templateUrl : 'html_pages/blog.html',
			controller  : 'blogController'
		})

		.when('/contact', {
			templateUrl : 'html_pages/contact.html',
			controller  : 'contactController'
		})
	
});

//create the controller and inject Angular's $scope
myApp.controller('mainController', function($scope) {
	$scope.message = 'This is index Page!';
});

myApp.controller('blogController', function($scope) {
	$scope.message = 'This is blog Page!.';
});

myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact us Page!';
});

myApp.controller('forumController', function($scope) {
	$scope.message = 'This is Job Page.';
});

myApp.controller('newsController', function($scope) {
	$scope.message = 'News Feeds Page.';
});