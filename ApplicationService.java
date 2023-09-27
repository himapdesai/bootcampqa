package com.v1.JPARestApp;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ApplicationService {
	
	@Autowired
	private PersonRepository personRepository;
	
	public List<Person> getAllPersons() {
		return personRepository.findAll();
	}
	
	public Person getPersonById(Integer id) {
		Optional<Person> result = personRepository.findById(id);
		if (result.isPresent()) {
			return result.get();
		} else {
			return null;
		}
	}
	
	public String addNewUser(Person p) {
		if (exists(p)) {
			return "User already exists";
		} else {
			addUser(p);
			return "User added successfully";
		}
	}
	
	public String updateUser(Person p) {
		if (exists(p)) {
			setUser(p);
			return "User updated successfully";
		} else {
			return "User doesn't exist";
		}
	}
	
	public String deletePerson(Integer id) {
		if (exists(id)) {
			personRepository.deleteById(id);
			return "User removed";
		} else {
			return "User not found";
		}
	}
	
	public List<Person> getPersonByFirstName(String fName) {
		return personRepository.getUsersByFirstName(fName);
	}	
	
	private boolean exists(Person p) {
		return exists(p.getPersonId());
	}
	
	private boolean exists(Integer id) {
		return personRepository.existsById(id);
	}
	
	private void setUser(Person p) {
		personRepository.save(p);
	}
	
	private void addUser(Person p) {
		setUser(p);
	}
	
}
