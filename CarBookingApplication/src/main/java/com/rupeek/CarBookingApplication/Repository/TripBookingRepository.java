package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Cab;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface TripBookingRepository extends JpaRepository<TripBooking,Integer> {

    @Transactional
    @Modifying
    @Query("UPDATE TripBooking t SET t.status = false WHERE t.driver.driverId = :driverId")
    public void freeRide(@Param("driverId")Integer driverId);

}
