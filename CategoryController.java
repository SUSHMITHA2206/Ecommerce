package com.java.orders.controller;

 

import java.util.HashMap;

import java.util.List;

import java.util.Map;

 

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Sort;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

 

import com.java.orders.exception.ResourceNotFoundException;

 

import com.java.orders.model.Categories;
import com.java.orders.exception.ResourceNotFoundException;
import com.java.orders.repository.CategoryRepository;

 

@CrossOrigin(origins = "*")

@RestController

@RequestMapping("/api/v3/")

public class CategoryController {

@Autowired

private CategoryRepository cateRepository;

 

// get all employees

@GetMapping("/categories")

public List<Categories> getAllCategories() {

return cateRepository.findAll();

}

 

// create employee rest api

@PostMapping("/categories")

public Categories createCategory(@RequestBody Categories categories) {

return cateRepository.save(categories);

}

 

// get employee by id rest api

@GetMapping("/categories/{id}")

public ResponseEntity<Categories> getCategoryById(@PathVariable Long id) {

Categories categories = cateRepository.findById(id)

.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));

return ResponseEntity.ok(categories);

}

 

// update employee rest api

 

@PutMapping("/categories/{id}")

public ResponseEntity<Categories> updateProduct(@PathVariable Long id, @RequestBody Categories categoriesDetails) {

Categories categories = cateRepository.findById(id)

.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));

categories.setCategoryId(categoriesDetails.getCategoryId());

categories.setCategoryName(categoriesDetails.getCategoryName());

categories.setDescription(categoriesDetails.getDescription());

Categories updatedCate = cateRepository.save(categories);

return ResponseEntity.ok(updatedCate);

}

 

// delete employee rest api

@DeleteMapping("/categories/{id}")

public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable Long id) {

	Categories categories = cateRepository.findById(id)

.orElseThrow(() -> new ResourceNotFoundException("Category not exist with id :" + id));

 

cateRepository.delete(categories);

Map<String, Boolean> response = new HashMap<>();

response.put("deleted", Boolean.TRUE);

return ResponseEntity.ok(response);

}

 

}