package com.v1.JPARestApp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<Person, Integer> {
	
	@Query(value = "SELECT * FROM perons WHERE first_name = ?1", nativeQuery = true)
	List<Person> getUsersByFirstName(String firstName);
	
	
	
}
