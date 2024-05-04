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

import com.java.orders.model.Products;
import com.java.orders.repository.ProductsRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v4/")
public class ProductsController {
@Autowired
private ProductsRepository prodRepository;

// get all employees
@GetMapping("/products")
public List<Products> getAllProduct() {
	List < Products> lp = prodRepository.findAll();
	for ( int i=0;i<lp.size();i++)
	{
		Products p = lp.get(i);
		System.out.println(" p is"+p);
	}
return lp;
}

// create employee rest api
@PostMapping("/products")
public Products createProduct(@RequestBody Products products) {
	products.setProductId(products.getProductId());
	products.setProductName(products.getProductName());
	products.setDescription(products.getDescription());
	products.setAvailableQuantity(products.getAvailableQuantity());
	products.setCategory(products.getCategory());
return prodRepository.save(products);
}

// get employee by id rest api
@GetMapping("/products/{id}")
public ResponseEntity<Products> getProductById(@PathVariable Long id) {
	Products products = prodRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
return ResponseEntity.ok(products);
}

// update employee rest api

@PutMapping("/products/{id}")
public ResponseEntity<Products> updateProduct(@PathVariable Long id, @RequestBody Products productsDetails) {
	Products products = prodRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));
	products.setProductId(productsDetails.getProductId());
	products.setProductName(productsDetails.getProductName());
	products.setDescription(productsDetails.getDescription());
	products.setAvailableQuantity(productsDetails.getAvailableQuantity());
	products.setCategory(productsDetails.getCategory());
	Products updatedProd = prodRepository.save(products);
    return ResponseEntity.ok(updatedProd);
}


// delete employee rest api
@DeleteMapping("/products/{id}")
public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable Long id) {
	Products products = prodRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

prodRepository.delete(products);
Map<String, Boolean> response = new HashMap<>();
response.put("deleted", Boolean.TRUE);
return ResponseEntity.ok(response);
}

}

