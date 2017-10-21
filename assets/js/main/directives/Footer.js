angular.module('GeneralApp')
.directive('footerR', function () {
    return {
        restrict: 'E',
        templateUrl: '/public/html/parts/footer.html',
        controller: FooterCtrl,
        link: function () {
        }
    };

    function FooterCtrl() {
    }
});
