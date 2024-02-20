var app = angular.module("myapp", []);

app.controller("myctrl1", function ($scope) {
$scope.students = [];
$scope.student = {};
$scope.index = -1;
$scope.clear = function(){
    $scope.student = {};
    $scope.index = -1;
}
$scope.insert = function(){
    $scope.students.push(angular.copy($scope.student));
    $scope.clear();
}
$scope.update = function(){
    $scope.students[$scope.index]= angular.copy($scope.student);
}
$scope.delete = function(){
    $scope.students.splice($scope.index, 1);
    $scope.clear();
}
$scope.cancel = function(){
    if ($scope.index == -1){
        $scope.clear();
    } 
    else{
        $scope.edit($scope.index);
    }
}
$scope.edit = function(){
    $scope.index = index;
    $scope.student = angular.copy($scope.students[index]);
}
});

app.controller("myctrl2", function ($scope, $rootScope) {
    $scope.$parent.students = [
        {
            fullname: "Pham Thi Nhu Quynh",
            birthday: "21-01-2004",
            mark: 8.5

        },
        {
            fullname: "Pham Thi Nga",
            birthday: "22-10-2006",
            mark: 7.5
        }
    ];
    $scope.edit = function (index){
        $rootScope.index = index;
        $rootScope.student = angular.copy($rootScope.students[index]);
    }
});
