'use strict';

angular.module('jhipsterelasticsearchApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


