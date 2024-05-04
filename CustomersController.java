package com.java.orders.controller;

import java.util.Map;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.java.orders.repository.CustomersRepository;
import com.java.orders.exception.ResourceNotFoundException;
import com.java.orders.model.Customers;
@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v2")
public class CustomersController{

@Autowired
private  CustomersRepository custRepository;

@GetMapping("/customers")
public List<Customers> getAllCustomers(){
	return custRepository.findAll();
}
@PostMapping("/customers")
public Customers createCustomer(@RequestBody Customers customers) {
	return custRepository.save(customers);
}
@PutMapping("/customers/{id}")
public ResponseEntity<Customers> updateOrder(@PathVariable Long id,@RequestBody Customers customerDetails){
	Customers customers= custRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		customers.setCustId(customerDetails.getCustId());
		customers.setFirstName(customerDetails.getFirstName());
		customers.setLastName(customerDetails.getLastName());
		customers.setAddress(customerDetails.getAddress());
		customers.setEmail(customerDetails.getEmail());
		customers.setMobile(customerDetails.getMobile());
		Customers updateCustomer=custRepository.save(customers);
		return ResponseEntity.ok(updateCustomer);
}

@GetMapping("/customers/{id}")
public ResponseEntity<Customers> getCustById(@PathVariable Long id){
	Customers customers=custRepository.findById(id)
			.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
	return ResponseEntity.ok(customers);
}
@DeleteMapping("/customers/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteCustomer(@PathVariable Long id){
		Customers customers=custRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		custRepository.delete(customers);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}


