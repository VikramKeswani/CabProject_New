package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Cab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;


public interface CabRepository extends JpaRepository<Cab,Integer> {

}
