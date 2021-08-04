package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Cab;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TripBookingRepository extends JpaRepository<TripBooking,Integer> {

    @Query("SELECT t FROM TripBooking t WHERE t.custId = :customerId")
    public List<TripBooking> viewAllTripCustomer(@Param("customerId")Customer customerId);
}
