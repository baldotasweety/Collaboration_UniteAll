'use strict';
 
angular.module('myApp').factory('ForumService', ['$http', '$q', function($http, $q){
 
    var REST_SERVICE_URI = '';
 
    var factory = {
        fetchAllForums: fetchAllForums,
        createForum: createForum,
        updateForum:updateForum,
        deleteForum:deleteForum
    };
 
    return factory;
 
    function fetchAllForums() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching forum posts');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function createForum(forum) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, forum)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while creating forum');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
 
    function updateForum(forum, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, forum)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating Forum');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function deleteForum(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting Forum');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
}]);