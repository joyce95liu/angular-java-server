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

import com.example.webdevsummer1.models.Lesson;
import com.example.webdevsummer1.models.Module;
import com.example.webdevsummer1.repositories.LessonRepository;
import com.example.webdevsummer1.repositories.ModuleRepository;




@RestController
@CrossOrigin(origins = "*", maxAge = 3600)

public class LessonService {
	
	 @Autowired
	    ModuleRepository moduleRepository;
	 
	 @Autowired
	    LessonRepository lessonRepository;
	
	  @GetMapping("/api/module/{moduleId}/lesson")
		public List<Lesson> findAlllessonsForModule(@PathVariable("moduleId") int moduleId) {
			Optional<Module> data = moduleRepository.findById(moduleId);
			if (data.isPresent()) {
				Module module = data.get();
				return module.getLessons();
			}
			return null;
	}
	    
	    
	    @PostMapping("/api/course/{courseId}/module/{moduleId}/lesson")   
	    	public Lesson createLesson(@PathVariable("moduleId") int moduleId, @RequestBody Lesson newLesson) {
	    	    Optional<Module> data = moduleRepository.findById(moduleId);
	    	    if(data.isPresent()) {
	    	        Module module = data.get();
	    	        newLesson.setModule(module);
	    	        return lessonRepository.save(newLesson);
	    	    }
	    	    return null;
	    	}
	    
	    @DeleteMapping("/api/lesson/{lessonId}")
	    public void deleteModule(
	    @PathVariable("lessonId") int id) {
	    	lessonRepository.deleteById(id);
	    }
	    
	    @GetMapping("/api/lesson")
	    public Iterable<Lesson> findAllLessons() {
	        return lessonRepository.findAll(); 
	    }

}
