function User(username, password, firstName, lastName,role,dateOfBirth,phone,email) {
  this.username = username;
  this.password = password;
  this.firstName=firstName;
  this.lastName=lastName;  
  this.role=role;
  this.dateOfBirth=dateOfBirth;
  this.email=email;
  this.phone=phone;

  this.setUsername = setUsername;
  this.getUsername = getUsername;
  
  this.setpassword = setpassword;
  this.getpassword = getpassword;
  
  this.setfirstName = setfirstName;
  this.getfirstName = getfirstName;
  
  this.setlastName = setlastName;
  this.getlastName = getlastName;
  
  this.setrole = setrole;
  this.getrole = getrole;
  
  this.setemail=setemail;
  this.getemail=getemail;
  
  this.setphone=setphone;
  this.getphone=getphone;
  
  this.setdateOfBirth=setdateOfBirth;
  this.getdateOfBirth=getdateOfBirth;
  
 

  function setlastName(lastName) {
    this.lastName = lastName;
  }
  function getlastName() {
    return this.lastName;
  }
  
    function setfirstName(firstName) {
    this.firstName = firstName;
  }
  function getfirstName() {
    return this.firstName;
  }
  
    function setpassword(password) {
    this.passwor = password;
  }
  function getpassword() {
    return this.password;
  }
  
    function setUsername(username) {
    this.username = username;
  }
  function getUsername() {
    return this.username;
  }
    
   function setrole(role) {
    this.role = role;
  }
  function getrole() {
    return this.role;
  }
  
  function setphone(phone) {
	    this.phone = phone;
  }
  function getphone() {
	    return this.phone;
  }
  
  
  function setemail(email) {
	    this.email = email;
  }	  
  function getemail() {
	    return this.email;
  }
  
  function setdateOfBirth(dateOfBirth) {
	    this.dateOfBirth = dateOfBirth;
	  }
	  function getdateOfBirth() {
	    return this.dateOfBirth;
	  }

}
