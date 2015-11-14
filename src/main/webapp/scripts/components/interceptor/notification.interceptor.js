 'use strict';

angular.module('jhipsterelasticsearchApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterelasticsearchApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterelasticsearchApp-params')});
                }
                return response;
            },
        };
    });