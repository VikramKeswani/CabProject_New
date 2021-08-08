package com.rupeek.CarBookingApplication.Repository;

import com.rupeek.CarBookingApplication.entity.Driver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DriverRepository extends JpaRepository<Driver,Integer> {

    @Query("SELECT d FROM Driver d WHERE d.rating>=4.5")
    List<Driver> viewBestDriver();

    @Query("select d from Driver d where d.driverId not in (select t.driver.driverId from TripBooking t where t.status=true)")
    List<Driver> viewFreeDriver();


    @Query("SELECT d FROM Driver d WHERE LOWER(d.email_address)=LOWER(:email_address) AND d.password = :password ")
    Driver validateDriver(@Param("email_address") String email_address, @Param("password") String password);
}
