package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.TripBookingRepository;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("TripBookingRepository")
public class TripBookingService implements IService<TripBooking> {

    @Autowired
    private TripBookingRepository tripBookingRepository;

    @Override
    public void create(TripBooking object) {
        tripBookingRepository.save(object);
    }

    @Override
    public TripBooking get(Integer id) {
        return null;
    }

    public List<TripBooking> get(Customer customerId) {
        return tripBookingRepository.viewAllTripCustomer(customerId);
    }

    @Override
    public void update(TripBooking object) {
        tripBookingRepository.save(object);
    }

    @Override
    public void delete(Integer id) {
        tripBookingRepository.deleteById(id);
    }


}
