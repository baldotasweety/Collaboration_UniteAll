'use strict';


app.controller('UserController', ['$scope', 'UserService', function($scope, UserService){
	console.log("UserController....")
	var self = this;
	self.user = {email:'', name:'', password:'', address:'', role:''};
	self.users = [];
	
	
	self.fetchALLUsers = function(){
		UserService.fetchAllUsers()
		 .then(
		        function(d){
		        	self.users = d; 
		        },		 
		        function(errResponse){
		        	
		        	console.error('error while fetching users');
		        }
		 );
	};
	
	self.createUser = function(){
		UserService.createUser(user)
		 .then(
				 self.fetchAllUsers,
				 function(errResponse){
			        	
			        	console.error('error while creating user');
			        }
				 
				 );
	};
	
	
	self.updateUser = function(user, email){
		UserService.updateUser(user, email)
		 .then(
				 self.fetchAllUsers,
				 function(errResponse){
			        	
			        	console.error('error while updating user');
			        }
				 
				 );
	};
	
	self.deleteUser = function(email){
		UserService.deleteUser(email )
		 .then(
				 self.fetchAllUsers,
				 function(errResponse){
			        	
			        	console.error('error while deleting user');
			        }
				 
				 );
	};
	self.fetchAllUsers();
	
	self.submit = function(){
		
		if(self.user.email===null){
			console.log('Saving new user', self.user);
			self.createUser(self.user);
			}else{
				console.log('saving new user', self.user);
				self.createUser(self.user);
			}
		self.reset();
	};
	
	self.edit = function(email){
		console.log('email to be edited',email);
		for(var i = 0; i< self.users.length; i++){
			if(self.users[i].email === email){
				self.user = angular.copy(self.users[i]);
				break;
			}
		}
	};
	
	self.remove= function(email){
		
		console.log('email to be deleted',email);
		if(self.user.email === email){
			self.reset();
		}
		
		self.deleteUser(email);
	};
	
}]);