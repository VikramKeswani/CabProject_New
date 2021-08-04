package com.rupeek.CarBookingApplication.service;

import com.rupeek.CarBookingApplication.Repository.DriverRepository;
import com.rupeek.CarBookingApplication.entity.Driver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("DriverRepository")
public class DriverService implements IService<Driver>{

    @Autowired
    private DriverRepository driverRepository;


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
        Driver driver = driverRepository.findById(id).get();
        driverRepository.delete(driver);
    }
}
