
 (function () {
	var $usernameFld, $passwordFld;
    var $loginBtn;
    var $signupBtn;
    var userService = new UserServiceClient();
    $(main);

    function main() {
    	
    	$usernameFld=$('#username');
    	$passwordFld=$('#password');
    	$loginBtn=$('#loginbtn');
    	$loginBtn.click(login); 
    	
    	$signupBtn=$('#signupbtn');
    	$signupBtn.click(signup);
    }
    
    function signup(){  	
    	window.location.href='../register/register.templete.client.html';
    }
    
    
    function login() { 
    	var $username=$usernameFld.val();
    	var $password=$passwordFld.val();
    	var $user=new User($username,$password);
        userService.login($user).then(success);  
    	  
    }
    
    function success(response) {   	
    	if(response===null){
     		alert("User doesn't exist or password is incorrect");
     	}else{
     		window.location.href='../profile/profile.template.client.html';
     	}
    	clearloginform();
    }
    
    function clearloginform(){
    	$usernameFld.val('');
    	$passwordFld.val('');
    }
    
})();


