/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    // 'app/controllers/index',
    // 'app/directives/index',
    // 'app/filters/index',
    // 'app/services/index'
], function () {
    'use strict';

    return angular.module('app', []);
    return angular.module('app', [
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'ngRoute'
    ]);
});
