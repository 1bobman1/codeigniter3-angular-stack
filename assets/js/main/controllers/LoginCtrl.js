angular.module('GeneralApp')
.controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$location', 'DocTitle', '$filter',
    function ($scope, $rootScope, $http, $location, DocTitle, $filter) {
        DocTitle.mainTitle = 'Login';
        DocTitle.Set('Page');

        $rootScope.isLoginAuth = false;
        $scope.errorAuth = false;
        $scope.userAuth = {
            email: '',
            password: ''
        };

        $scope.siginIn = function () {
            console.log('LOGIN');
            var email = $scope.userAuth.email,
                password = $scope.userAuth.password;

            if (email == 'ooo@o.oo' && password == '12345') {
                $rootScope.isLoginAuth = true;
                $rootScope.user = {
                    email: email,
                    userId: '11'
                };
                console.log('auth', $rootScope.user);
                $scope.userAuth.email = '';
                $scope.userAuth.password = '';
                $scope.errorAuth = false;
            } else {
                $scope.errorAuth = true;
            }

            if ($rootScope.isLoginAuth === true) {
                $location.url('/profile');
            }
        };

        // $scope.getData = function () {
        //     $http.post('/home/get_data/').then(function (response) {
        //         console.log(response);
        //         $scope.dataBigTest = response.data.object;
        //     }, function (resp) { });
        // }
        // $scope.getData();
    }
]);
