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
import com.java.orders.model.Orders;
import com.java.orders.repository.OrdersRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v3/")
public class OrdersController {
@Autowired
private OrdersRepository ordRepository;

// get all employees
@GetMapping("/orders")
public List<Orders> getAllOrder() {
return ordRepository.findAll();
}

// create employee rest api
@PostMapping("/orders")
public Orders createOrder(@RequestBody Orders orders) {
	orders.setOrdId(orders.getOrdId());
	orders.setTord(orders.getQuantity()*orders.getPriceItem());
	orders.setTtax(orders.getTord()*orders.getGst()/100);
    orders.setTpit(orders.getTord()+orders.getTtax());
return ordRepository.save(orders);
}

// get employee by id rest api
@GetMapping("/orders/{id}")
public ResponseEntity<Orders> getOrderById(@PathVariable Long id) {
Orders orders = ordRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));
return ResponseEntity.ok(orders);
}

// update employee rest api

@PutMapping("/orders/{id}")
public ResponseEntity<Orders> updateOrder(@PathVariable Long id, @RequestBody Orders orderDetails) {
Orders orders = ordRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));

orders.setOrdName(orderDetails.getOrdName());
orders.setOrdId(orderDetails.getOrdId());
orders.setGst(orderDetails.getGst());
orders.setPriceItem(orderDetails.getPriceItem());
orders.setQuantity(orderDetails.getQuantity());
orders.setTord(orderDetails.getPriceItem()*orderDetails.getQuantity());
orders.setTtax(orderDetails.getTord()*orderDetails.getGst()/100);
orders.setTpit(orders.getTtax()+orders.getTord());


Orders updatedOrder = ordRepository.save(orders);
return ResponseEntity.ok(updatedOrder);
}

//@GetMapping("/order/{ordName}")
//public ResponseEntity<List<Orders>> getOrderByOrderName(@PathVariable String ordName) {
//	List<Orders> orders = ordRepository.findByordName(ordName, Sort.by("tpit"));
//	
//	return ResponseEntity.ok(orders);
//}
//
//@GetMapping("/orders/decs")
//public ResponseEntity<List<Orders>> getOrderByOrdId(@PathVariable Long Tpit) {
//	List<Orders> orders = ordRepository.findByOrdIdOrderByTpitDesc(Tpit);
//	
//	return ResponseEntity.ok(orders);
//}


// delete employee rest api
@DeleteMapping("/orders/{id}")
public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable Long id) {
Orders orders = ordRepository.findById(id)
.orElseThrow(() -> new ResourceNotFoundException("Order not exist with id :" + id));

ordRepository.delete(orders);
Map<String, Boolean> response = new HashMap<>();
response.put("deleted", Boolean.TRUE);
return ResponseEntity.ok(response);
}

}
