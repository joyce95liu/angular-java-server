package com.example.webdevsummer1.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer1.models.Course;
import com.example.webdevsummer1.models.Module;
import com.example.webdevsummer1.repositories.CourseRepository;
import com.example.webdevsummer1.repositories.ModuleRepository;



@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ModuleService {
    @Autowired
    CourseRepository courseRepository;
    
    @Autowired
    ModuleRepository moduleRepository;
    
    @GetMapping("/api/module")
    public Iterable<Module> findAllModules() {
        return moduleRepository.findAll(); 
    }

    @GetMapping("/api/course/{courseId}/module")
	public List<Module> findAllModulesForCourse(@PathVariable("courseId") int courseId) {
		Optional<Course> data = courseRepository.findById(courseId);
		if (data.isPresent()) {
			Course course = data.get();
			return course.getModules();
		}
		return null;
}
    
    
    @PostMapping("/api/course/{courseId}/module")
    
    	public Module createModule(@PathVariable("courseId") int courseId, @RequestBody Module newModule) {
    	    Optional<Course> data = courseRepository.findById(courseId);
    	    if(data.isPresent()) {
    	        Course course = data.get();
    	        newModule.setCourse(course);
    	        return moduleRepository.save(newModule);
    	    }
    	    return null;
    	}
    
    @DeleteMapping("/api/module/{moduleId}")
    public void deleteModule(
    @PathVariable("moduleId") int id) {
    	moduleRepository.deleteById(id);
    }

 
    
 
}

