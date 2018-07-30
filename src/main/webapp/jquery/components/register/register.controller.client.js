(function () {
    var $usernameFld, $passwordFld, $verifyPasswordFld;
    var $registerBtn;
    var $loginBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
    	
    	$usernameFld=$('#Username');
    	$passwordFld=$('#inputPassword');
    	$verifyPasswordFld=$('#verifyPassword');
    	$registerBtn=$('#updateBtn');
    	$loginBtn=$('#loginBtn');
    	$registerBtn.click(register);
    	$loginBtn.click(login);
    }
    
    function register() { 
    	var $username=$usernameFld.val();
    	var $password=$passwordFld.val();
    	var $verifypassworde=$verifyPasswordFld.val();
    	if($password!=$verifypassworde){
    		alert('password should match!')
    	}
		var $user=new User($username,$password);
       userService.register($user).then(success);   
    }
    
    function success(response) {
    	console.log(response);
        if(response===null){
       	alert('the username has already been taken');
        }else{
        	window.location.href='../profile/profile.template.client.html';
        }
    }
    
    function login(){
    	window.location.href='../login/login.template.client.html';
    }
    
})();
