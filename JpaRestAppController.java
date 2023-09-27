package com.v1.JPARestApp;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JpaRestAppController implements ErrorController {
	
	@Autowired
	private ApplicationService appService;
	
	@GetMapping("/users")
	public List<Person> getAllUsers() {
		return appService.getAllPersons();
	}
	
	@GetMapping("/users/{id}")
	public Person getUserById(@PathVariable(name="id") Integer personId) {
		return appService.getPersonById(personId);
	}
	
	@GetMapping("/users/byname/{name}")
	public List<Person> getUsersByFirstName(@PathVariable(name="name") String firstName) {
		return appService.getPersonByFirstName(firstName);
	}
	
	@PostMapping("/users")
	public String addNewUser(@RequestBody Person newPerson) {
		return appService.addNewUser(newPerson);
	}
	
	@PutMapping("/users")
	public String updateUser(@RequestBody Person newPerson) {
		return appService.updateUser(newPerson);
	}
	
	@DeleteMapping("/users")
	public String deleteUser(@RequestParam(value = "id") Integer id) {
		return appService.deletePerson(id);
	}
	
	@GetMapping("/error")
	public String err() {
		return "ERRROR!!!";
	}

}
