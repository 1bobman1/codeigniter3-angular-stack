angular.module('GeneralApp')
.controller('MainCtrl', ['$scope', '$rootScope', '$http', '$location', 'DocTitle', '$filter',
    function ($scope, $rootScope, $http, $location, DocTitle, $filter) {
        DocTitle.mainTitle = 'Main';
        DocTitle.Set('App');

        $scope.dataBigTest = {};

        $scope.getData = function () {
            $http.get('/welcome/get_data/').then(function (response) {
                console.log(response);
                $scope.dataBigTest = response.data.object;
            }, function (resp) { });
        }
        $scope.getData();
    }
]);
