'use strict';
 
angular.module('myApp').controller('ForumController', ['$scope', 'ForumService', function($scope, ForumService) {
	//$scope.categories = ["Java", "AngularJS", "Spring"];
	
    var self = this;
    self.forum={id:null,username:'',address:'',email:''};
    self.forums=[];
 
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
 
 
    fetchAllForums();
 
    function fetchAllForums(){
        ForumService.fetchAllForums()
            .then(
            function(d) {
                self.forums = d;
            },
            function(errResponse){
                console.error('Error while fetching Forums');
            }
        );
    }
 
    function createForum(forum){
        ForumService.createForum(forum)
            .then(
            fetchAllForums,
            function(errResponse){
                console.error('Error while creating forum');
            }
        );
    }
 
    function updateForum(forum, id){
        ForumService.updateForum(forum, id)
            .then(
            fetchAllForums,
            function(errResponse){
                console.error('Error while updating Forum');
            }
        );
    }
 
    function deleteForum(id){
        ForumService.deleteForum(id)
            .then(
            fetchAllForums,
            function(errResponse){
                console.error('Error while deleting Forum');
            }
        );
    }
 
    function submit() {
        if(self.forum.id===null){
            console.log('Saving New Forum', self.forum);
            createForum(self.forum);
        }else{
        	
            updateForum(self.forum, self.forum.postId);
            console.log('Forum updated with id ', self.forum.postId);
        }
        reset();
    }
 
    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.forums.length; i++){
            if(self.forums[i].postId === id) {
                self.forum = angular.copy(self.forums[i]);
                break;
            }
        }
    }
 
    function remove(id){
        console.log('id to be deleted', id);
        if(self.forum.postId === id) {//clean form if the blog to be deleted is shown there.
            reset();
        }
        deleteForum(id);
    }
 
 
    function reset(){
        self.forum={id:null,username:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }
 
}]);