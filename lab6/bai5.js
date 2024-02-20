var app = angular.module("myapp",[]);
app.directive("polyNumber", function(){
    return{
        restrict: "A",
        require:"ngModel",
        link: function (scope, element, attr, myCtrl){
            myCtrl.$parsers.push(function(value){
                var number = parseInt(value);
                if (number %2 ==0 && number %9 ==0){
                    myCtrl.$setValidity('charE', true);
                } else {
                    myCtrl.$setValidity('charE', false);
                }
                return value;
            });
        }
    }
});
app.controller("myCtrl", function($scope){
    
})