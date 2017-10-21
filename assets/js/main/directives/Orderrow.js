angular.module('GeneralApp')
.directive('orderrow', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: '/public/html/parts/order-row.html',
        link: function (scope, elm) {
            scope.add = function ($event, add = false) {
                var keyCode = $event.which || $event.keyCode;
                if ($event != null && keyCode === 13) {
                    console.log('key', $event.keyCode);
                    addTemplatePart(scope, elm);
                } else if (add === true) {
                    console.log('key add');
                    addTemplatePart(scope, elm);
                }
            };

            function addTemplatePart(scope, elm) {
                scope.countRow = scope.countRow + 1;
                scope.data.price = 111;
                console.log('count row', scope.countRow);
                return elm.after($compile('<orderrow></orderrow>')(scope));
            }
        }
    };
});
