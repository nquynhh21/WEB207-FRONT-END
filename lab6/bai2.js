var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
    $scope.items = [
        {
            name: "Nước ngọt",
            price: 10000
        },
        {
            name: "Cà phê đen",
            price: 12000
        },
        {
            name: "Nước ngọt",
            price: 18000
        }
    ];
    $scope.getAmount = function () {
        var amount = 0;
        for (var i = 0; i < $scope.items.length; i++) {
            if ($scope.items[i].buy) {
                amount += $scope.items[i].price * $scope.items[i].quantity;
            }
        }
        return amount;
    };
});