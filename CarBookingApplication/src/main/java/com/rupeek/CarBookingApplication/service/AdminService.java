package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.AdminRepository;
import com.rupeek.CarBookingApplication.entity.Admin;
import com.rupeek.CarBookingApplication.entity.TripBooking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service("AdminRepository")
public class AdminService implements IService<Admin> {

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public void create(Admin object) {
        adminRepository.save(object);
    }

    @Override
    public Admin get(Integer id) {
        return null;

    }

    @Override
    public void update(Admin object) {
        adminRepository.save(object);
    }

    @Override
    public void delete(Integer id) {
        adminRepository.deleteById(id);
    }


    public List<TripBooking> getAllTripForDays(Integer custId, Date fromDateTime, Date toDateTime){
            return adminRepository.getAllTripsForDays(custId,fromDateTime,toDateTime);
    }

    public List<TripBooking> getAllTripDateWise(){
        return adminRepository.getTripsDateWise();
    }

    public List<TripBooking> getAllTrips(Integer customer){
        return adminRepository.getAllTrips(customer);
    }

    // CustomerWise Missing

    //CabWise Missing

}
