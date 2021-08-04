package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DriverRepository extends JpaRepository<Driver,Integer> {

    @Query("SELECT d FROM Driver d WHERE d.rating>=4.5")
    List<Driver> viewBestDriver();

}
