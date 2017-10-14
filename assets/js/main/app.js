angular.module('GeneralApp', [
    'ngRoute', 'ngMaterial', 'ngAnimate', 'monospaced.elastic', 'angular-clipboard'
])
    .run(['$rootScope', '$location', '$http', '$q',
        '$route', '$routeParams', '$timeout', '$window',
        function ($rootScope, $location, $http, $q,
                  $route, $routeParams, $timeout, $window) {
            $rootScope.mainModule = true;
            $rootScope.testingMode = $routeParams.testingMode;
            var deferred = $q.defer(),
                original,
                lastRoute,
                requestId = 0;

            $rootScope.setHomeRoute = function (route) {
                $rootScope.homeRoute = route;
            };

            $rootScope.$on('$routeChangeSuccess', function (event, current) {
                if ($location.path() === '/') {
                    $rootScope.currentNavItem = 'main';
                } else {
                    $rootScope.currentNavItem = '';
                }
            });

            original = $location.path;
            $location.path = function (param, reload) {
                var lastRoute,
                    un,
                    current,
                    currentRequestId;
                if (!param) {
                    return original.call($location);
                }

                currentRequestId = ++requestId;
                if (reload === false) {
                    lastRoute = $route.current;
                    un = $rootScope.$on('$locationChangeSuccess', function () {
                        un();
                        if (requestId !== currentRequestId) {
                            return;
                        }
                        if (!angular.equals($route.current.params, lastRoute.params)) {
                            $rootScope.$broadcast('$routeUpdate');
                        }
                        current = $route.current;
                        $route.current = lastRoute;
                        $timeout(function () {
                            if (requestId !== currentRequestId) {
                                return;
                            }
                            $route.current = current;
                        });
                    });
                    $timeout(un);
                }
                return original.call($location, param);
            };
            $rootScope.isRoute = function (path) {
                current = '';
                try {
                    current = $location.path().toString();
                } catch (ex) {
                }
                return (current == path);
            }
            HTTPREQ = window.location.protocol + '//';
        }
    ])

    .config(['$routeProvider', '$locationProvider', '$mdThemingProvider', '$mdAriaProvider',
        function ($routeProvider, $locationProvider, $mdThemingProvider, $mdAriaProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            $mdAriaProvider.disableWarnings();

            $routeProvider
                .when('/', {
                    controller: 'MainCtrl',
                    templateUrl: 'public/html/index.html'
                })
                .when('/help', {
                    controller: 'HelpCtrl',
                    templateUrl: 'public/html/help.html'
                })
                .when('/login', {
                    controller: 'HelpCtrl',
                    templateUrl: 'public/html/login.html'
                })
                .when('/profile', {
                    controller: 'HelpCtrl',
                    templateUrl: 'public/html/profile.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
