angular.module('GeneralApp')
.controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$location', 'DocTitle', '$filter', '$window',
    function ($scope, $rootScope, $http, $location, DocTitle, $filter, $window) {
        DocTitle.mainTitle = 'Login';
        DocTitle.Set('Page');

        $scope.errorAuth = false;
        $scope.userAuth = {
            email: '',
            password: ''
        };

        if (!$rootScope.user.logged_in) {
            $location.url('/login');
        } else {
            $location.url('/profile');
        }

        $scope.siginIn = function () {
            var email = $scope.userAuth.email,
                password = $scope.userAuth.password;

            if (email != '' && password != '') {

                $http.post('/web/api/users/siginIn', {
                    user: $scope.userAuth
                }).then(function (response) {
                    if (response.data.status === true) {
                        $window.location.reload();
                    }
                }, function (resp) { });

                $scope.errorAuth = false;
            } else {
                $scope.errorAuth = true;
            }
        };
    }
]);
