'use strict';

angular.module('jhipsterelasticsearchApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
