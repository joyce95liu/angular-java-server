package com.example.webdevsummer1.services;



import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer1.models.User;
import com.example.webdevsummer1.repositories.UserRepository;






@RestController
public class UserService {
    @Autowired
    UserRepository userRepository;
    

    @GetMapping("/api/user")    
    public Iterable<User> findAllUsers(){
        return userRepository.findAll();
    }
    
    @PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}
    
	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable("userId") int id) {
		userRepository.deleteById(id);
	}
	
	@GetMapping("/api/user/{userId}")
	public User findUserById(@PathVariable("userId") int id) {
		Optional<User> user = userRepository.findById(id);
		if(user.isPresent()) {
			return user.get();
		}
		return null;
	}
	
	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable("userId") int userId, @RequestBody User newUser) {
		Optional<User> optional = userRepository.findById(userId);
		if(optional.isPresent()) {
			User user = optional.get();
			user.setLastName(newUser.getLastName());
			user.setFirstName(newUser.getFirstName());
			user.setusername(newUser.getusername());
			userRepository.save(user);
			return user;
		}
		return null;
	}
	
	
	@PostMapping("/api/login")
	public User login(@RequestBody User credentials,HttpSession session) {
		Iterable<User> users=userRepository.findUserByCredentials(credentials.getusername(),credentials.getPassword());
	if(users.iterator().hasNext()) {
	User user=users.iterator().next();
	   session.setAttribute("currentUser", user);
	   return user;
	  }else { 
	 return null;
	  }
}
	
	@PostMapping("/api/register")
	public User register(@RequestBody User user,HttpSession session) {
		if(!userRepository.findUserByUsername(user.getusername()).iterator().hasNext()) {
	    session.setAttribute("currentUser", user);
	    return userRepository.save(user);
	}else {
		return null;
	}
    }
	
	@GetMapping("/api/profile")
	public User loadprofile(HttpSession session) {
	User currentUser = (User)session.getAttribute("currentUser");    
	return currentUser;
	}
	
	@PutMapping("/api/profile")
	public User updateprofile(@RequestBody User user,HttpSession session){
		User currentUser = (User)session.getAttribute("currentUser");
		    currentUser.setusername(user.getusername());
		    currentUser.setEmail(user.getEmail());
		    currentUser.setPhone(user.getPhone());
		    currentUser.setRole(user.getRole());
		    currentUser.setDateOfBirth(user.getDateOfBirth());
		    userRepository.save(currentUser);
		    return currentUser;
	}

	@PostMapping("/api/logout")
	public void logout(HttpSession session) { 
		session.invalidate();
	}
  

}



