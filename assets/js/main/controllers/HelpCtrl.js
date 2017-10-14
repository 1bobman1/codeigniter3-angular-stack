angular.module('GeneralApp')
.controller('HelpCtrl', ['$scope', '$rootScope', '$http', '$location', 'DocTitle', '$filter',
    function ($scope, $rootScope, $http, $location, DocTitle, $filter) {
        DocTitle.mainTitle = 'Help';
        DocTitle.Set('page');

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
