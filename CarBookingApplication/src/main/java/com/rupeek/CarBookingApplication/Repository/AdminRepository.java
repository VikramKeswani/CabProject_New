package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface AdminRepository extends JpaRepository<Admin,Integer> {

}