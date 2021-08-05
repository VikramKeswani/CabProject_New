package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Admin;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;


public interface AdminRepository extends JpaRepository<Admin,Integer> {
    @Query("SELECT t FROM TripBooking t WHERE t.customer.customerId = :customerId")
    List<TripBooking> getAllTrips(@Param("customerId") Integer customerId);

    @Query("SELECT t FROM TripBooking t WHERE t.tripBookingId = :id")
    List<TripBooking> getTripsCabwise(@Param("id") Integer id);

    @Query("SELECT t FROM TripBooking t ORDER BY t.fromDateTime ASC")
    List<TripBooking> getTripsDateWise();

    @Query("SELECT t FROM TripBooking t WHERE t.customer.customerId = :customerId AND t.fromDateTime >= :fromDateTime AND t.toDateTime <= :toDateTime")
    List<TripBooking> getAllTripsForDays(@Param("customerId") int customerId,
                                         @Param("fromDateTime") Date fromDateTime, @Param("toDateTime") Date toDateTime );

}