package com.example.webdevsummer1.repositories;
import org.springframework.data.repository.CrudRepository;

import com.example.webdevsummer1.models.Module;

public interface ModuleRepository
extends CrudRepository<Module, Integer>{}

