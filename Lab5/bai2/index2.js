var app = angular.module("myapp", []);

app.controller("myctrl1", function ($scope, $rootScope) {
$scope.save = function (){
$rootScope.students[$rootScope.index]= $scope.student;
}
$scope.cancle = function(){
    $rootScope.student= angular.copy($rootScope.students[$rootScope.index]);
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