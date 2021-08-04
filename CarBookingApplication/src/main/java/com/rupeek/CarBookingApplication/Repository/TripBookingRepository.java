package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Cab;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TripBookingRepository extends JpaRepository<TripBooking,Long> {
}
