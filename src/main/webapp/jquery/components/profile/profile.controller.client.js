(function(){
$(init);

var $username;
var $role;
var $email;
var $dateOfBirth;
var $phone;

var $updateBtn;
var $logoutBtn;
var userService = new UserServiceClient();

function init(){
	
	$username=$('#username');
	$role=$('#role');
	$email=$('#email');
	$dateOfBirth=$('#dateofbirth');
	$phone=$('#phone');
	userService.loadprofile()
	.then(renderUser);
	
	$updateBtn=$("#updateBtn")
	.click(updateUser);
	
	$logoutBtn=$('#logoutBtn').click(logout);
	
}

function updateUser(){
	
	var $user={
			username:$username.val(),
			role:$role.val(),
			phone:$phone.val(),
			email:$email.val(),
	        dateOfBirth:$dateOfBirth.val()
	};
	userService
	.updateprofile($user)
	.then(success);
}

function success(response){
	alert('The update is successful!');
}


function renderUser(user){
	$username.val(user.username);
	$role.val(user.role);
	$phone.val(user.phone);
	$email.val(user.email);
	$dateOfBirth.val(user.dateOfBirth);
	
}

function clearprofilepage(){
	$username.val('');
	$role.val('');
	$email.val('');
	$dateOfBirth.val('');
	$phone.val('');
}

function logout(){
	userService.logout();
	clearprofilepage();
	window.location.href='../login/login.template.client.html';
}

})();