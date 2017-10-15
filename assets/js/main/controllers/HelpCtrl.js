angular.module('GeneralApp')
.controller('HelpCtrl', ['$scope', '$rootScope', '$http', '$location', 'DocTitle', '$filter',
    function ($scope, $rootScope, $http, $location, DocTitle, $filter) {
        DocTitle.mainTitle = 'Help';
        DocTitle.Set('page');
    }
]);
