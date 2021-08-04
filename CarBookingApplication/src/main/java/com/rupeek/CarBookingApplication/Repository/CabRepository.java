package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Cab;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface CabRepository extends JpaRepository<Cab,Integer> {

    @Query("SELECT c FROM Cab c WHERE LOWER(c.carType) = LOWER(:carType)")
    List<Cab> getByCarType(@Param("carType") String carType);

    @Query("SELECT count(*) FROM Cab c WHERE LOWER(c.carType) = LOWER(:carType)")
    int countCabsOfType(@Param("carType") String carType);

}
