package com.rupeek.CarBookingApplication.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rupeek.CarBookingApplication.Repository.DriverRepository;
import com.rupeek.CarBookingApplication.Repository.TripBookingRepository;
import com.rupeek.CarBookingApplication.entity.Customer;
import com.rupeek.CarBookingApplication.entity.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("DriverRepository")
public class DriverService implements IService<Driver>{

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private TripBookingRepository tripBookingRepository;

    @Override
    public void create(Driver driver) {
        driverRepository.save(driver);
    }

    @Override
    public Driver get(Integer id) {
        return driverRepository.findById(id).get();
    }

    @Override
    public void update(Driver object) {
        driverRepository.save(object);
    }

    @Override
    public void delete(Integer id){
        driverRepository.deleteById(id);
    }

    public List<Driver> viewBestDriver(){
        return driverRepository.viewBestDriver();
    }

    public Driver viewFreeDriver(){
        List<Driver> driverList = driverRepository.viewFreeDriver();

        return driverList.get(0);
    }
    public Driver createM(Driver driver) {
        Driver cabn = driverRepository.save(driver);
        return cabn;
    }

    public Driver validateDriver(String email,String password){
        Driver driver = driverRepository.validateDriver(email,password);
        if(driver!=null) {
            return driver;
        }

        System.out.println("Wrong UserName Or Password");
        return null;
    }
}
