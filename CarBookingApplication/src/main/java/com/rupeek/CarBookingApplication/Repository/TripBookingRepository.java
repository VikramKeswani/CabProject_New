package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

public interface TripBookingRepository extends JpaRepository<TripBooking,Integer> {

    @Transactional
    @Modifying
    @Query("UPDATE TripBooking t SET t.status = false WHERE t.driver.driverId = :driverId")
    public void freeRide(@Param("driverId")Integer driverId);


        @Query("SELECT t FROM TripBooking t WHERE t.driver.driverId = :driverId")
        public List<TripBooking> getAllCustomerRides(Integer driverId);

    @Query("SELECT t FROM TripBooking t WHERE t.customer.customerId = :customerId")
    public List<TripBooking> getAllCustomerRides2(Integer customerId);


}
