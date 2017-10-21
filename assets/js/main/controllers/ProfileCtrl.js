angular.module('GeneralApp')
.controller('ProfileCtrl', ['$scope', '$rootScope', '$http', '$location', 'DocTitle', '$filter', '$window',
    function ($scope, $rootScope, $http, $location, DocTitle, $filter, $window) {
        DocTitle.mainTitle = 'Profile';
        DocTitle.Set('page');

        $scope.dataRowCorrect = true;
        $scope.data = {};
        $scope.dataList = {};
        $scope.dataDescr = {};
        $scope.dataRow = {};
        $scope.countRow = 0;

        $scope.orderAdd = function () {
            $http.post('/web/api/order/add', {
                dataList: $scope.data,
                dataDescr: $scope.dataDescr
            }).then(function (response) {
                if (response.data.status === true) {
                    $window.location.reload();
                    console.log('added', $scope.data);
                }
            });
        }

        $scope.add = function ($event) {
            if (!$scope.dataRow.productName && !$scope.dataRow.productCount && !$scope.dataRow.price) {
                $scope.dataRowCorrect = false;
            }
            var keyCode = $event.which || $event.keyCode;
            if ($event != null && keyCode === 13) {
                console.log('key', $event.keyCode);
                addTemplatePart();
            }
        };

        $scope.deleteRow = function (key) {
            delete $scope.data[key];
        };

        $scope.addClick = function () {
            console.log('key add');
            addTemplatePart();
        };

        $scope.listData = function () {
        };

        $scope.dataArray = Object.keys($scope.data).map(function (key) {
            return $scope.data[key];
        });

        function addTemplatePart() {
            var element = $window.document.getElementById('productName');
            if ($scope.dataRow.productName != '' && $scope.dataRow.productCount != '' && $scope.dataRow.price != '') {
                $scope.countRow = $scope.countRow + 1;
                [].push.apply($scope.dataList, $scope.data[$scope.countRow] = {
                    idx: $scope.countRow,
                    name: $scope.dataRow.productName,
                    count: $scope.dataRow.productCount,
                    price: $scope.dataRow.price
                });
                $scope.dataRow = {
                    productName: '',
                    productCount: '',
                    price: ''
                }
            }
            if (element) {
                element.focus();
            }
        }
    }
]);
