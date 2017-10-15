angular.module('GeneralApp')
.directive('footer', function () {
    return {
        restrict: 'E',
        templateUrl: '/public/html/parts/footer.html',
        controller: HeaderCtrl,
        link: function () {
        }
    };

    function HeaderCtrl() {
    }
});
