package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface CustomerRepository extends CrudRepository<Customer,Integer> {
    @Query("SELECT c FROM Customer c WHERE LOWER(c.username)=LOWER(:username) AND c.password = :password ")
    Customer validateCustomer(@Param("username") String username, @Param("password") String password);
}