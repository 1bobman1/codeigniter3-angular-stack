angular.module('GeneralApp')
.directive('header', function () {
    return {
        restrict: 'E',
        templateUrl: '/public/html/parts/header.html',
        controller: HeaderCtrl,
        link: function () {
        }
    };

    function HeaderCtrl() {
    }
});
