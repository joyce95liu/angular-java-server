package com.example.webdevsummer1.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevsummer1.models.Lesson;
import com.example.webdevsummer1.models.Widget;
import com.example.webdevsummer1.repositories.LessonRepository;
import com.example.webdevsummer1.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {
	@Autowired
	WidgetRepository repository;
	
	@Autowired
	LessonRepository lessonrepository;
	
	@GetMapping("/api/widget")
   
	public List<Widget> findAll(){
	return (List<Widget>)repository.findAll();
    }
	
	@GetMapping("/api/widget/{widgetId}")
    public Widget findWidget(@PathVariable("widgetId") int widgetId){
		Optional<Widget> data=repository.findById(widgetId);
		if (data.isPresent()) {
		return data.get();
        }
		return null;
	}
	
	@GetMapping("/api/lesson/{lessonId}/widget")
    public List<Widget> findAllWidgets(@PathVariable("lessonId") int lessonId){
		Optional<Lesson> data = lessonrepository.findById(lessonId);
		if (data.isPresent()) {
			Lesson lesson = data.get();
			return lesson.getWidgets();
		}
		return null;
    }
	
	@PostMapping("/api/lesson/{lessonId}/widget/save")
	public void saveAllWidgets(@PathVariable("lessonId") int lessonId, @RequestBody List<Widget> widgets) {
		Optional<Lesson> data = lessonrepository.findById(lessonId);
		if (data.isPresent()) {
			Lesson lesson = data.get();
			 for (Widget widget:lesson.getWidgets()) {
			repository.delete(widget);
			 }		 
			for (Widget newwidget:widgets) {
			newwidget.setLesson(lesson);
			repository.save(newwidget);
		     }		
		}		
	}
	
	@PutMapping("/api/widget/{widgetId}")
	public Widget updateWidget(@PathVariable("widgetId") int widgetId, @RequestBody Widget newwidget) {
		Optional<Widget> data=repository.findById(widgetId);
		if (data.isPresent()) {
		Widget widget=data.get();
		widget.setName(newwidget.getName());
		widget.setSize(newwidget.getSize());
		widget.setHref(newwidget.getHref());
		widget.setListType(newwidget.getListType());
		widget.setSrc(newwidget.getSrc());
		widget.setText(newwidget.getText());
		widget.setListItems(newwidget.getListItems());
		repository.save(widget);
		return widget;
        }
		return null;
	}
	
	@DeleteMapping("/api/widget/{widgetId}")
	public void deleteWidget(@PathVariable("widgetId") int widgetId) {
		repository.deleteById(widgetId);
	}
}
