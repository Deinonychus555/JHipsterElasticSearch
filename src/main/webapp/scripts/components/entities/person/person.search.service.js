'use strict';

angular.module('jhipsterelasticsearchApp')
    .factory('PersonSearch', function ($resource) {
        return $resource('api/_search/persons/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });
