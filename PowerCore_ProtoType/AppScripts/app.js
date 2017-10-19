var app = angular.module('app', ['ngRoute', 'file-model', 'darthwade.loading', 'ui.select', 'ngSanitize', 'ngAnimate', 'asideModule', 'ui.bootstrap', 'angularModalService']);

app.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider, $stateProvider) {
 
        $routeProvider.
            when('/Admin', {
                templateUrl: '/Templates/Controllers/Admin.html',
                controller: 'Admin'
            }).when('/PowerPlanner', {
                templateUrl: '/Templates/Controllers/PowerPlanner.html',
                controller: 'PowerPlanner'
            }).otherwise({
                templateUrl: '/Templates/Controllers/PowerPlanner.html',
                controller: 'PowerPlanner'
            })
    }]);

app.filter('jsonDate', function () {
    return function (input, format) {

        if (angular.isUndefined(input))
            return;

        // first 6 character is the date
        var date = new Date(parseInt(input.substr(6)));

        // default date format
        if (angular.isUndefined(format))
            format = "MM/DD/YYYY";

        format = format.replace("DD", (date.getDate() < 10 ? '0' : '') + date.getDate()); // Pad with '0' if needed
        format = format.replace("MM", (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1)); // Months are zero-based
        format = format.replace("YYYY", date.getFullYear());

        return format;
    };
});