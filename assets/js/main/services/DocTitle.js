angular.module('GeneralApp')
.service('DocTitle', [function () {
        this.init = function () {
            this.mainTitle = document.title;
        };

        this.Set = function (title) {
            document.title = this.mainTitle + ' - ' + title;
        };

        this.SetFull = function (title) {
            document.title = title;
        };

        this.init();
    }]);
