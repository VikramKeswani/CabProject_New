package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.AdminRepository;
import com.rupeek.CarBookingApplication.Repository.TripBookingRepository;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.Driver;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("TripBookingRepository")
public class TripBookingService implements IService<TripBooking> {

    @Autowired
    private TripBookingRepository tripBookingRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public void create(TripBooking object) {
        tripBookingRepository.save(object);
    }

    public TripBooking createTripbooking(TripBooking object){
        TripBooking trip = tripBookingRepository.save(object);
        return trip;
    }

    @Override
    public TripBooking get(Integer id) {
        return null;
    }

    @Override
    public void update(TripBooking object) {
        tripBookingRepository.save(object);
    }

    @Override
    public void delete(Integer id) {
        tripBookingRepository.deleteById(id);
    }

    public List<TripBooking> viewAllTripCustomer(Integer customerId) {
        return adminRepository.getAllTrips(customerId);
    }

    public void insertTrip(TripBooking trip){
        tripBookingRepository.save(trip);
        System.out.println(trip.getBillAmount());
    }

    public void freeRide(Integer driverId){
        tripBookingRepository.freeRide(driverId);
    }

    public List<TripBooking> allRides(Integer driverId) {
        return tripBookingRepository.getAllCustomerRides(driverId);
    }

        public List<TripBooking> allRides2(Integer customerId){
            return tripBookingRepository.getAllCustomerRides2(customerId);
    }


}
