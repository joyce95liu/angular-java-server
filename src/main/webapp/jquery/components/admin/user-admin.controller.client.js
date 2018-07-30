(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn,$updateBtn;
    var $firstNameFld, $lastNameFld;
    var $userRowTemplate, $tbody;
    var $role;
    var $inputrowId;
    var userService = new UserServiceClient();
    $(main);

    function main() {
    	$tbody=$('tbody');
    	$userRowTemplate=$('.wbdv-template');
    	$createBtn=$('#createUser');
    	$updateBtn=$('#update1');
    	$removeBtn=$('#wbdv-remove');
    	$editBtn=$('#wbdv-edit');
    	$usernameFld=$('#usernameFld');
		$passwordFld=$('#passwordFld');
		$firstNameFld=$('#firstNameFld');
		$lastNameFld=$('#lastNameFld');
		$role=$('#roleFld');
    	$inputrowId=$('.wbdv-form');
    	
    	$updateBtn.click(updateUser);
    	$createBtn.click(createUser);
    	
    	
    	findAllUsers(); 
    }
    function createUser() { 
    	/*var $username=$('#usernameFld').val();
    	var $password=$('#passwordFld').val();
    	var $firstName=$('#firstNameFld').val();
    	var $lastName=$('#lastNameFld').val();
    	var $role=$('#role').val();
		var $user=new User($username,$password,$firstName,$lastName,$role);*/
		var $user={
				username:$usernameFld.val(),
				password:$passwordFld.val(),
				firstName:$firstNameFld.val(),
				lastname:$lastNameFld.val(),
				role:$role.val()
		}
			
		userService.createUser($user)
		.then(findAllUsers);
		
    	}
    function findAllUsers() { 
		userService
		.findAllUsers()
		.then(renderUsers);
    }
    
    function updateUser(){
    	
    	var $username=$('#usernameFld').val();
    	var $password=$('#passwordFld').val();
    	var $firstName=$('#firstNameFld').val();
    	var $lastName=$('#lastNameFld').val();
    	var $role=$('#role').val();
		var $user=new User($username,$password,$firstName,$lastName,$role);
		var $userId=$inputrowId.attr('id');
		userService
		     .updateUser($userId,$user)
		     .then(findAllUsers);
    }
    
    function renderUsers(users) { 
		$tbody.empty();
		for(var i=0;i<users.length;i++){
			var user=users[i];
			var $clone=$userRowTemplate.clone();
			
			$clone.attr('id',user.id)
			$clone.find('#wbdv-remove').click(deleteUser);
			$clone.find('#wbdv-edit').click(findUserById);
			$clone.find('.wbdv-username')
			.html(user.username)
			$clone.find('.wbdv-first-name')
			.html(user.firstName)
			$clone.find('.wbdv-last-name')
			.html(user.lastName)
			
			
			$tbody.append($clone);
    }
    }
    
    
    function findUserById() {
    	var $editBtn=$(event.currentTarget);
    	
    	var $userId=$editBtn
    	.parent()
		.parent()
		.parent()
		.attr('id');
    	
    	 $inputrowId.attr('id',$userId);
    	userService
    	.findUserById($userId)
    	.then(renderUser);
    }
    
    function renderUser(user){
    	$('#usernameFld').val(user.username);
		$('#passwordFld').val(user.password);
	    $('#firstNameFld').val(user.firstName);
	    $('#lastNameFld').val(user.lastName);
    }
    
   
    
    function deleteUser() { 
    	var $deleteBtn=$(event.currentTarget);
		var $userId=$deleteBtn
		.parent()
		.parent()
		.parent()
		.attr('id');
		
		userService
		.deleteUser($userId)
		.then(findAllUsers);
   	}
    
   /* function selectUser() { … }
    function updateUser() { … }
   */
    
})();
