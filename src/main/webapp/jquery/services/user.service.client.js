function UserServiceClient() {
	this.url = 'http://localhost:8080/api/user';
	this.registerurl='http://localhost:8080/api/register';
	this.loginurl='/http://localhost:8080/api/login';
	this.profileurl='http://localhost:8080/api/profile';
	this.logouturl='http://localhost:8080/api/logout';
	
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.deleteUser = deleteUser;
	this.findUserById=findUserById;
	this.updateUser=updateUser;
	this.register=register;
	this.login=login;
	this.logout=logout;
	this.loadprofile=loadprofile;
	this.updateprofile=updateprofile;
	
	var self=this;
	
	function updateUser(userId,user){
		return fetch(self.url+'/'+userId,{
			method:'put',	
			body:JSON.stringify(user),
			headers:{
				'content-type':'application/json'
			}
		})
	}
	
	
	function findUserById(userId){
		return fetch(self.url+'/'+userId)
		.then(function(response) {
			return response.json();
		});
	}
	
	
	function deleteUser(userId) {
		return fetch(self.url + '/' + userId, {
			method: 'delete'
		})	
	}
	
	function findAllUsers(){
		return fetch(self.url)
		.then(function(response) {
			return response.json();
		});
	}
 
	function createUser(user){
		return fetch(self.url,{
			method:'post',
			body:JSON.stringify(user),
			headers:{
				'content-type':'application/json'
			}
		});
	}
	
	function register(user){
		return fetch(self.registerurl,{
			method:'post',
			credentials:'same-origin',
			body:JSON.stringify(user),
			headers:{
				'content-type':'application/json'
			}
		})
		
		.then(response => response.json())
		.then(function(response){
			return response;
		})
		.catch(function(error) {
			return null;
		});
	}
	
	function login(user){
		return fetch(self.loginurl,{
		method:'post',
		credentials:'same-origin',
		body:JSON.stringify(user),
		headers:{
			'content-type':'application/json'
		}
	})
	
	.then(response => response.json())
	.then(function(response){
		return response;
	})
	.catch(function(error) {
		return null;
	});

}
	
	function loadprofile(){  
		return fetch(self.profileurl,{
			credentials:'same-origin',
		})
		.then(function(response) {
			return response.json();
		});
    }
	
	function updateprofile(user){
		return fetch(self.profileurl,{
			method:'put',
			credentials:'same-origin',
			body:JSON.stringify(user),
			headers:{
				'content-type':'application/json'
			}
		});
	}
	
	function logout(){
		return fetch(self.logouturl,{
			method:'post',
			credentials:'same-origin'
		})
	}
	
	
}