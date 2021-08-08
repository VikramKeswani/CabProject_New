package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    @Query("SELECT c FROM Customer c WHERE LOWER(c.email_address)=LOWER(:email_address) AND c.password = :password ")
    Customer validateCustomer(@Param("email_address") String email_address, @Param("password") String password);
}
