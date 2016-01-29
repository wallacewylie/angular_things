var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.message = 'Hello Angular';
    $scope.url = 'http://www.cnn.com/money';
    $scope.end = '123';
    $scope.thisOrThat = " ";
    $scope.thing = false;

    $scope.names = ['Pizza', 'Unicorn', 'Robots'];
    $scope.my = {favourite: 'Unicorns'};
}]);