//chirpApp.js is our controller

//map chirpApp to controller from html template
var app = angular.module('chirpApp', []);

app.controller('mainController', ['$scope', function ($scope){
	$scope.posts = [];
	$scope.newPost = {created_by: '', text: '', created_at: ''};

	$scope.post = function (){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost);
		$scope.newPost = {created_by: '', text: '', created_at: ''};
	};
}]);