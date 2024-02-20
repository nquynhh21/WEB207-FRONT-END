var app = angular.module("myapp", []);

app.controller("myctrl1", function ($scope) {
$scope.save = function (){
$scope.$parent.students[$scope.$parent.index]= $scope.student;
}
$scope.cancle = function(){
    $scope.$parent.student= angular.copy($scope.$parent.students[$scope.$parent.index]);
}
});

app.controller("myctrl2", function ($scope) {
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
        $scope.$parent.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);
    }
});